import AppBar from "../components/AppBar";
import Providers from "../components/Providers";
import "./globals.css";

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
      <body>
        <Providers>
          <AppBar />
          <div className="m-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
