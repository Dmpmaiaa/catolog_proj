import { IProduct } from "@/app/api/products/route";
import { deleteProduct, findUserProducts, insertNewProduct } from "../models/productsDB";

export async function getUserProducts(id: number) {
  const userProducts = await findUserProducts(id);
  return userProducts;
}

export async function addNewProduct(product: IProduct) {
    
  const newProduct = await insertNewProduct(product);
  return newProduct;
}


export async function eraseProduct(pid: string) {
    
  const newProduct = await deleteProduct(pid);
  return newProduct;
}
