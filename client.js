import { User } from "./tcp_pb.js";
const conn = await Deno.connect({ port: 8080 });
console.log(`connected to ${JSON.stringify(conn.remoteAddr)}`);
const writer = conn.writable.getWriter();

const user = new User();
user.setFirstName("John");
user.setLastName("Smith");
user.setAge(30);

setInterval(async () => {
  await writer.write(user.serializeBinary());
}, 1000);
