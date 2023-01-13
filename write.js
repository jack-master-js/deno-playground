const file = await Deno.open("a.txt", { write: true });
const encoder = new TextEncoder();
const writer = file.writable.getWriter();

await writer.write(encoder.encode("hello world"));

file.close();
