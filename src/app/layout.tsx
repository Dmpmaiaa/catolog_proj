import AppBar from "../components/AppBar";
import Providers from "../components/Providers";
import "./globals.css";
import { Kumbh_Sans } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

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
      <body className={`${kumbh.className} h-screen bg-scnd-light-gray`}>
        <Providers>
          <AppBar />
          <div className="mx-5">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
