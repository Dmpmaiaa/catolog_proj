import { verifyJwt } from "@/lib/jwt";
import { editProduct, eraseProduct } from "@/server/services/productsService";

export async function DELETE(
  req: Request,
  { params }: { params: { id: number } }
) {
  try {
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

    const pid = String(params.id);
    const deletedProduct = eraseProduct(pid);
    return new Response(JSON.stringify({ msg: "product_deleted" }), {
      status: 202,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: number } }
) {
  try {
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

    const pid = String(params.id);
    const newProductData = await req.json();
    const editedProduct = editProduct(pid, newProductData);
    return new Response(JSON.stringify({ msg: "product_updated" }), {
      status: 202,
    });
  } catch (error) {
    console.log(error);
  }
}
