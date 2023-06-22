import { ObjectId } from "mongodb"
import { getMongoCollection } from "./db"


const COLLECTION_NAME = "products"

export async function findUserProducts(id: number) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    const userProducts = await collection.find({userId: new ObjectId(id)}).toArray()
    return userProducts
}