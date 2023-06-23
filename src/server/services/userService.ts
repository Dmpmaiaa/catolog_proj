import { IRequestBodyLogin } from "@/app/api/login/route";
import { findUser, insertUser } from "../models/userDB";
import { IRequestBodySignUp } from "@/app/api/user/route";

export async function getUser(data: IRequestBodyLogin) {
  const user = await findUser(data);
  return user;
}

export async function createUser(data: IRequestBodySignUp) {
  if (!await getUser(data)) {
    const user = await insertUser(data);
    return user;
  }
  
  return null
}
