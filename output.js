const encoder = new TextEncoder();
const writer = Deno.stdout.writable.getWriter();
await writer.write(encoder.encode("hi there")); //console.log
