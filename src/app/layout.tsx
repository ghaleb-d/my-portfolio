// src/app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ghaleb Damaj • Portfolio",
  description: "My personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Esteban</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
