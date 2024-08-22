import { Nav } from "@/components/ui/nav";
import type { Metadata } from "next";
import { Cabin as Font } from "next/font/google";
import "./globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Features",
  description: "Open source featurebase alternative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
