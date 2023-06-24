import { verifyJwt } from "@/lib/jwt";
import { getUserProducts } from "@/server/services/productsService";

export async function GET(
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


  return new Response("Success")
}
