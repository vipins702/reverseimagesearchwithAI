
import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';


export const runtime = 'edge';

export default async function handler(req: NextRequest) {
  // Get the Vercel Blob token from environment variables (Edge runtime: use globalThis)
  const blobToken = (globalThis as any).BLOB_READ_WRITE_TOKEN || process.env?.BLOB_READ_WRITE_TOKEN;
  if (!blobToken) {
    return NextResponse.json({ error: 'Blob token not configured' }, { status: 500 });
  }
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
    // Use Web API for base64 decoding in Edge runtime
    const binaryString = atob(base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    if (bytes.length > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size exceeds 10MB limit' }, { status: 400 });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2);
    const fileExtension = filename.split('.').pop();
    const uniqueFilename = `reverse-search-${timestamp}-${randomId}.${fileExtension}`;

    // Upload to Vercel Blob Storage
    const blob = await put(uniqueFilename, bytes, {
      access: 'public',
      contentType: `image/${fileExtension}`,
      token: blobToken
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

  // Get the Vercel Blob token from environment variables
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!blobToken) {
    return NextResponse.json({ error: 'Blob token not configured' }, { status: 500 });
  }
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
      token: blobToken
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
