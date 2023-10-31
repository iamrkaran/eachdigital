import type { Metadata } from "next";


import Header from "../Landing/Header";
import Footer from "../Landing/Footer";


export const metadata: Metadata = {
  title: "Each Digital",
  description: "Each Digital is a Social Media Network for the Future",
};

export default function LandingLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
