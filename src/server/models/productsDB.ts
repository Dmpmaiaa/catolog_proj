import { ObjectId } from "mongodb"
import { getMongoCollection } from "./db"
import { IProduct } from "@/app/api/products/route"


const COLLECTION_NAME = "products"

export async function findUserProducts(id: number) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    const userProducts = await collection.find({userId: new ObjectId(id)}).toArray()
    return userProducts
}

export async function insertNewProduct(product: IProduct) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    const {title, description, price, category, userId} = product
    const userProducts = await collection.insertOne({
        title,
        description,
        price,
        category,
        userId: new ObjectId(userId)
    })
    return userProducts
}

export async function deleteProduct(pid: string){
    const collection = await getMongoCollection(COLLECTION_NAME)
    const deletedProduct = await collection.deleteOne({_id: new ObjectId(pid)})
    return deletedProduct
}