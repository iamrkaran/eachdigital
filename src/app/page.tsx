
import AllComponents from "@/components/Landing/Allcomponents";
import Hero from "@/components/Landing/Hero";
import LandingLayout from "@/components/Layout/LandingLayout";

import Image from "next/image";

export default function Home() {
  return (
    <LandingLayout>
      
      <Hero />
      <AllComponents />
    </LandingLayout>
  );
}
