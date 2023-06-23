
import { signJwtAccessToken } from "@/lib/jwt";
import { getUser } from "@/server/services/userService";

import * as bcrypt from "bcrypt";

export interface IRequestBodyLogin {
  username: string;
  password: string;
  email?: string
}
export async function POST(request: Request) {
  const body: IRequestBodyLogin = await request.json();

  const user = await getUser(body);

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass)
    const result = {
      ...userWithoutPass,
      accessToken
    }
    return new Response(JSON.stringify(result))
  }
  else return new Response(JSON.stringify(null))
}
