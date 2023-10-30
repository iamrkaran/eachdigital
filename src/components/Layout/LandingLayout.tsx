import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "../Landing/Header";
import Footer from "../Landing/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Each Digital",
  description: "Each Digital is a Social Media Network for the Future",
};

export default function LandingLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
