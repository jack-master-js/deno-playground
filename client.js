const conn = await Deno.connect({ port: 8080 });
const encoder = new TextEncoder();
const writer = conn.writable.getWriter();

const items = ["hello", " ", "world!!!"];
for (const item of items) {
  await writer.write(encoder.encode(item));
}
