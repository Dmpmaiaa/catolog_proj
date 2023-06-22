export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/UserProducts/:path*"],
};