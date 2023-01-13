const file = await Deno.open("a.txt", { read: true });
const decoder = new TextDecoder();

for await (const chunk of file.readable) {
  console.log(decoder.decode(chunk));
}

file.close();
