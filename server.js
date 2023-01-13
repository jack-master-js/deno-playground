const listener = Deno.listen({ port: 8080 });
console.log(`listening on 0.0.0.0:8080`);
const decoder = new TextDecoder();

for await (const conn of listener) {
  console.log(conn.rid);
  for await (const chunk of conn.readable) {
    console.log(decoder.decode(chunk));
  }
}
