// app/api/image-proxy/route.ts (Next.js App Router)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  if (!url) return new Response('Missing URL', { status: 400 })

  const res = await fetch(url)
  const contentType = res.headers.get('content-type') || 'image/jpeg'
  const buffer = await res.arrayBuffer()

  return new Response(buffer, {
    headers: { 'Content-Type': contentType },
  })
}
