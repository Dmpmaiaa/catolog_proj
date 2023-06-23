import { createUser } from "@/server/services/userService";
import * as bcrypt from "bcrypt";

export interface IRequestBodySignUp {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: Request, response: Response) {
  const body: IRequestBodySignUp = await request.json();
  console.log("POST to /api/user");

  const user = await createUser({
    username: body.username,
    email: body.email,
    password: await bcrypt.hash(body.password, 10),
  });

  if (user) {
    const { password, ...result } = user;
   
    return new Response(result, {status: 201});
  }
  return new Response(
    JSON.stringify({
      error: "User already exists",
    }),
    { status: 409 }
  );
}
