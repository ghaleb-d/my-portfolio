// src/app/api/crypto/sse/route.ts
import fetch from "node-fetch";

export async function GET() {
  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        try {
          const res = await fetch(
            // include solana here
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
          );
          const data = await res.json();
          controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
        } catch {
          controller.enqueue(`event: error\ndata: unable to fetch\n\n`);
        }
        await new Promise((r) => setTimeout(r, 30000));
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
