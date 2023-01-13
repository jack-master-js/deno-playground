const file = await Deno.open("a.txt", { read: true });
const decoder = new TextDecoder();

//readable
for await (const chunk of file.readable) {
  console.log(decoder.decode(chunk));
}

//stat()
// const fileInfo = await file.stat();
// if (fileInfo.isFile) {
//   const buf = new Uint8Array(100);
//   console.log(buf);
//   await file.read(buf);
//   console.log(buf);
//   const text = decoder.decode(buf);
//   console.log(text);
// }

// file.close();
