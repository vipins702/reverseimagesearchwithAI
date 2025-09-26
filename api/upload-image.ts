
import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export default async function handler(req: NextRequest) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { imageData, filename } = await req.json();

    if (!imageData || !filename) {
      return NextResponse.json({ error: 'Missing image data or filename' }, { status: 400 });
    }

    // Validate file size (10MB limit)
    const base64Data = imageData.split(',')[1];
    const buffer = Buffer.from(base64Data, 'base64');
    
    if (buffer.length > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size exceeds 10MB limit' }, { status: 400 });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2);
    const fileExtension = filename.split('.').pop();
    const uniqueFilename = `reverse-search-${timestamp}-${randomId}.${fileExtension}`;

    // Upload to Vercel Blob Storage
    const blob = await put(uniqueFilename, buffer, {
      access: 'public',
      contentType: `image/${fileExtension}`,
    });

    return NextResponse.json({
      success: true,
      publicUrl: blob.url,
      filename: uniqueFilename
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' }, 
      { status: 500 }
    );
  }
}
