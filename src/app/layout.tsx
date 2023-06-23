import AppBar from "../components/AppBar";
import Providers from "../components/Providers";
import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh",
});

export const metadata = {
  title: "Product Catalog",
  description: "Made by Diogo Maia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <Providers>
          <AppBar />

          <div className="m-5">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
