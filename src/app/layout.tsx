import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./Provider";

const inter = localFont({
  src: "sui-generis-free.rg-regular.otf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Each Digital",
  description: "Each Digital is a Social Media Network for the Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
