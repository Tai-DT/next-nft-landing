import { NextResponse } from 'next/server';

const FIGMA_BASE = 'https://api.figma.com/v1';
const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN || '';
const FILE_KEY = process.env.FIGMA_FILE_KEY || '';

function missingEnv() {
  return NextResponse.json({ error: 'FIGMA_ACCESS_TOKEN and FIGMA_FILE_KEY must be set in server environment' }, { status: 400 });
}

export async function GET(req: Request) {
  if (!FIGMA_TOKEN || !FILE_KEY) {
    return missingEnv();
  }

  try {
    const url = new URL(req.url);
    // Get the path segments after /api/figma
    const pathAfter = url.pathname.split('/api/figma')[1] || '';
    // Normalize: remove leading slash
    const p = pathAfter.startsWith('/') ? pathAfter.slice(1) : pathAfter;

    // route mapping
    if (!p || p === '') {
      // /api/figma -> file
      const resp = await fetch(`${FIGMA_BASE}/files/${FILE_KEY}`, {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN,
          'Content-Type': 'application/json',
        },
      });
      const body = await resp.text();
      return new NextResponse(body, { status: resp.status, headers: { 'Content-Type': resp.headers.get('content-type') || 'application/json' } });
    }

    if (p === 'file') {
      const resp = await fetch(`${FIGMA_BASE}/files/${FILE_KEY}`, {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN,
          'Content-Type': 'application/json',
        },
      });
      const body = await resp.text();
      return new NextResponse(body, { status: resp.status, headers: { 'Content-Type': resp.headers.get('content-type') || 'application/json' } });
    }

    if (p.startsWith('nodes')) {
      // /api/figma/nodes?ids=...
      const ids = url.searchParams.get('ids') || '';
      const resp = await fetch(`${FIGMA_BASE}/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(ids)}`, {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN,
          'Content-Type': 'application/json',
        },
      });
      const body = await resp.text();
      return new NextResponse(body, { status: resp.status, headers: { 'Content-Type': resp.headers.get('content-type') || 'application/json' } });
    }

    if (p.startsWith('images')) {
      const ids = url.searchParams.get('ids') || '';
      const format = url.searchParams.get('format') || 'png';

      // If the caller asks for raw image bytes (raw=1), fetch Figma's images endpoint,
      // extract the image URL for the first id, then fetch and proxy the binary image.
      const raw = url.searchParams.get('raw');
      if (raw === '1' || raw === 'true') {
        // 1) Request Figma images JSON
        const imagesResp = await fetch(`${FIGMA_BASE}/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=${encodeURIComponent(format)}`, {
          headers: {
            'X-Figma-Token': FIGMA_TOKEN,
            'Content-Type': 'application/json',
          },
        });

        if (!imagesResp.ok) {
          const txt = await imagesResp.text();
          return new NextResponse(txt, { status: imagesResp.status, headers: { 'Content-Type': imagesResp.headers.get('content-type') || 'application/json' } });
        }

        const imagesJson = await imagesResp.json();
        // imagesJson.images is a map of id->url
        const firstId = ids.split(',')[0] || '';
        const imageUrl = imagesJson?.images?.[firstId];
        if (!imageUrl) {
          return NextResponse.json({ error: 'No image URL returned by Figma for the provided id(s)' }, { status: 404 });
        }

        // 2) Fetch the actual image bytes and return them
        const imgResp = await fetch(imageUrl);
        if (!imgResp.ok) {
          const txt = await imgResp.text();
          return new NextResponse(txt, { status: imgResp.status, headers: { 'Content-Type': imgResp.headers.get('content-type') || 'text/plain' } });
        }

        const arrayBuffer = await imgResp.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const contentType = imgResp.headers.get('content-type') || `image/${format}`;

        return new NextResponse(buffer, { status: 200, headers: { 'Content-Type': contentType } });
      }

      // Default behavior: proxy the Figma images JSON (map of id -> url)
      const resp = await fetch(`${FIGMA_BASE}/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=${encodeURIComponent(format)}`, {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN,
          'Content-Type': 'application/json',
        },
      });
      const body = await resp.text();
      return new NextResponse(body, { status: resp.status, headers: { 'Content-Type': resp.headers.get('content-type') || 'application/json' } });
    }

    // Fallback: proxy the path under /files/:fileKey
    // e.g. /api/figma/some/endpoint -> FIGMA_BASE/some/endpoint
    const resp = await fetch(`${FIGMA_BASE}/${p}${url.search}`, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    const body = await resp.text();
    return new NextResponse(body, { status: resp.status, headers: { 'Content-Type': resp.headers.get('content-type') || 'application/json' } });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
