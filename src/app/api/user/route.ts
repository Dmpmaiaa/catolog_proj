
import { createUser } from "@/server/services/userService";
import * as bcrypt from "bcrypt";

export interface IRequestBodySignUp {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: IRequestBodySignUp = await request.json();

  const user = await createUser({
    username: body.username,
    email: body.email,
    password: await bcrypt.hash(body.password, 10),
  });
 

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
