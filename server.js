const listener = Deno.listen({ port: 8080 });
const decoder = new TextDecoder();

for await (const conn of listener) {
  for await (const chunk of conn.readable) {
    console.log(decoder.decode(chunk));
  }
}
