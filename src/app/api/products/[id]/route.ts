import { verifyJwt } from "@/lib/jwt";
import { eraseProduct } from "@/server/services/productsService";

export async function DELETE(
  req: Request,
  { params }: { params: { id: number } }
) {
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
}
