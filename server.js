import { User } from "./tcp_pb.js";
const listener = Deno.listen({ port: 8080 });
console.log(`listening on 0.0.0.0:8080`);

for await (const conn of listener) {
  console.log(conn.rid);
  for await (const chunk of conn.readable) {
    const user = User.deserializeBinary(chunk);
    console.log(user.getFirstName());
    console.log(user.getLastName());
    console.log(user.getAge());
  }
}
