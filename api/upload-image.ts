

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


    // Validate file size (10MB limit) and decode base64 using Web APIs
    const base64Data = imageData.split(',')[1];
    // Use atob + Uint8Array for base64 decoding (works in Edge and Node)
    function base64ToUint8Array(base64: string): Uint8Array {
      if (typeof atob === 'function') {
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
      } else {
        // Node.js fallback
        return new Uint8Array(Buffer.from(base64, 'base64'));
      }
    }
    const bytes = base64ToUint8Array(base64Data);
    if (bytes.length > 10 * 1024 * 1024) {
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
    const blob = await put(uniqueFilename, bytes, {
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

