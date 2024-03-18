import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import 'aos/dist/aos.css'; // Import AOS CSS

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
