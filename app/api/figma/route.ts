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

  const url = new URL(req.url);
  const p = url.pathname.replace('/api/figma', '');
  const search = url.search || '';

  try {
    // route mapping: /api/figma/file -> /files/:fileKey
    if (p === '/file' || p === '' || p === '/') {
      const resp = await fetch(`${FIGMA_BASE}/files/${FILE_KEY}`, {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN,
          'Content-Type': 'application/json',
        },
      });

      const body = await resp.text();
      return new NextResponse(body, { status: resp.status, headers: { 'Content-Type': resp.headers.get('content-type') || 'application/json' } });
    }

    if (p === '/nodes') {
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

    if (p === '/images') {
      const ids = url.searchParams.get('ids') || '';
      const format = url.searchParams.get('format') || 'png';
      const resp = await fetch(`${FIGMA_BASE}/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=${encodeURIComponent(format)}`, {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN,
          'Content-Type': 'application/json',
        },
      });

      const body = await resp.text();
      return new NextResponse(body, { status: resp.status, headers: { 'Content-Type': resp.headers.get('content-type') || 'application/json' } });
    }

    // fallback: proxy arbitrary path under /files/:fileKey
    const resp = await fetch(`${FIGMA_BASE}${p.replace(/\/$/, '') ? p : ''}${search}`, {
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

