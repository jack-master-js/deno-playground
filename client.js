import { User } from "./tcp_pb.js";
const conn = await Deno.connect({ port: 8080 });
console.log(`connected to ${JSON.stringify(conn.remoteAddr)}`);
const user = new User();
const writer = conn.writable.getWriter();

user.setName("JMJ");
user.setAge(30);

setInterval(async () => {
  await writer.write(user.serializeBinary());
}, 1000);
