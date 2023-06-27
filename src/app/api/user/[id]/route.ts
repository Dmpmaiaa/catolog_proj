import { verifyJwt } from "@/lib/jwt";
import { getUserProducts } from "@/server/services/productsService";

export async function GET(
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

    const userProducts = await getUserProducts(params.id);
    return new Response(JSON.stringify(userProducts));
  } catch (error) {
    console.log(error);
  }
}
