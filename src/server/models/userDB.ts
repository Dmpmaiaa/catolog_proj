import { IRequestBodyLogin } from "../../api/login/route";
import { getMongoCollection } from "./db";

const COLLECTION_NAME = "users"

export async function authenticateUser(data:IRequestBodyLogin) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    const user = await collection.findOne({username: data.username})
    return user
}
export async function insertUser(data:IRequestBodyLogin) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    const user = await collection.insertOne(data)
    return user
}