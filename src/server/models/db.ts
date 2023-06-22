import { MongoClient } from "mongodb";

const MONGO_URL = process.env.MONGO_URL ?? "mongodb://localhost:27017";
const DB_NAME = "smartex";

let client: any;
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(MONGO_URL);
    }
    return client;
  } catch (err) {
    console.log(err);
  }
}

export async function getMongoCollection(
  collectionName: string,
  dbName = DB_NAME
) {
  const client = await connectToMongo();
  return client.db(dbName).collection(collectionName);
}
