import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";



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
