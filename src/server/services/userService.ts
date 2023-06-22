import { IRequestBodyLogin } from "../../api/login/route";
import { IRequestBodySignUp } from "../../api/user/route";
import { authenticateUser, insertUser } from "../models/userDB";

export async function getUser(data:IRequestBodyLogin) {
    const user = await authenticateUser(data)
    return user
}

export async function createUser(data:IRequestBodySignUp) {
    const user = await insertUser(data)
    return user
}