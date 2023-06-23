import { IRequestBodyLogin } from "@/app/api/login/route";
import { getMongoCollection } from "./db";

const COLLECTION_NAME = "users";

export async function findUser(data: IRequestBodyLogin) {
  const collection = await getMongoCollection(COLLECTION_NAME);
  if (data.email) {
    const user = await collection.findOne({
      username: data.username,
      email: data.email,
    });
    return user;
  }

  const user = await collection.findOne({ username: data.username });
  return user;
}

export async function insertUser(data: IRequestBodyLogin) {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const user = await collection.insertOne(data);
  return user;
}
