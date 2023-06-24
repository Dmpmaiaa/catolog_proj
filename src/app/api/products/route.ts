import { verifyJwt } from "@/lib/jwt";
import { addNewProduct, eraseProduct } from "@/server/services/productsService";

export interface IProduct {
  title: string;
  description: string;
  price: number;
  category: string;
  userId: string;
}

export async function POST(req: Request) {
  const accessToken = req.headers.get("accessToken");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  if (req.method === "POST") {
    const product: IProduct = await req.json();
    const newProduct = addNewProduct(product);
    return new Response(JSON.stringify({ msg: "product_created" }), {
      status: 201,
    });
  }
}
