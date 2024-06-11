import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex with Next.JS and PokeAPI",
  description: "Full-stack project using Next.JS to create an amazing Pokedex with PokeAPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-gradient-to-tr from-blue-800 to-blue-500`}>{children}</body>
    </html>
  );
}
