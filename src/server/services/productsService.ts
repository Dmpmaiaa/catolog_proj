import { findUserProducts } from "../models/productsDB"

export async function getUserProducts(id:number) {
    const userProducts = findUserProducts(id)
    return userProducts
}