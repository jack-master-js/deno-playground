const items = ["hello", " ", "world!!!"];
const file = await Deno.open("a.txt", { write: true });
const encoder = new TextEncoder();
const writer = file.writable.getWriter();

for (const item of items) {
  await writer.write(encoder.encode(item));
}

file.close();
