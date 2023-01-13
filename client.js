const conn = await Deno.connect({ port: 8080 });
console.log(`connected to ${JSON.stringify(conn.remoteAddr)}`);
const encoder = new TextEncoder();
const writer = conn.writable.getWriter();

setInterval(async () => {
  await writer.write(encoder.encode("hello world"));
}, 1000);
