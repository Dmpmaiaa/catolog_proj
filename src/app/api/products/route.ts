import { verifyJwt } from "@/lib/jwt";
import { addNewProduct } from "@/server/services/productsService";

export interface IProduct {
  title: string;
  description: string;
  price: number;
  category: string;
  userId: string;
}




export async function POST(
  req: Request,
  
) {
/*   const accessToken = req.headers.get("accessToken");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized",
      }),
      {
        status: 401,
      }
    );
  } */

  const product: IProduct = await req.json()
  const newProduct = addNewProduct(product)

  return new Response("Success")
}
