

import { put } from '@vercel/blob';



export default async function handler(req: Request): Promise<Response> {
  // Get the Vercel Blob token from environment variables
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!blobToken) {
    return new Response(JSON.stringify({ error: 'Blob token not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { imageData, filename } = await req.json();

    if (!imageData || !filename) {
      return new Response(JSON.stringify({ error: 'Missing image data or filename' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate file size (10MB limit)
    const base64Data = imageData.split(',')[1];
    const binaryString = Buffer.from(base64Data, 'base64');
    if (binaryString.length > 10 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: 'File size exceeds 10MB limit' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2);
    const fileExtension = filename.split('.').pop();
    const uniqueFilename = `reverse-search-${timestamp}-${randomId}.${fileExtension}`;

    // Upload to Vercel Blob Storage
    const blob = await put(uniqueFilename, binaryString, {
      access: 'public',
      contentType: `image/${fileExtension}`,
      token: blobToken,
    });

    return new Response(JSON.stringify({
      success: true,
      publicUrl: blob.url,
      filename: uniqueFilename,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ error: 'Failed to upload image' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

