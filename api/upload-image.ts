


import { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';



export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Get the Vercel Blob token from environment variables

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!blobToken) {
    return res.status(500).json({ error: 'Blob token not configured' });
  }

  // Handle CORS preflight

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }


  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }


  try {
    const { imageData, filename } = req.body;

    if (!imageData || !filename) {
      return res.status(400).json({ error: 'Missing image data or filename' });
    }

    // Validate file size (10MB limit) and decode base64 using Web APIs
    const base64Data = imageData.split(',')[1];
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
      return res.status(400).json({ error: 'File size exceeds 10MB limit' });
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

    return res.status(200).json({
      success: true,
      publicUrl: blob.url,
      filename: uniqueFilename,
    });

  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Failed to upload image' });
  }
}

