"use client";
import DashboardLayout from "@/components/(dashboard)/layout";
import AllComponents from "@/components/(landing)/Allcomponents";
import Hero from "@/components/(landing)/Hero";
import LandingLayout from "@/components/(landing)/layout";
import DashboardContent from "./(dashboard)/dashboard/[username]/page";
import { useSelector } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
    });
  }, [])
  
  
  const isAuthenticated: boolean = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  return (
    <>
      {isAuthenticated ? (
        <DashboardLayout>
          <DashboardContent />
        </DashboardLayout>
      ) : (
        <LandingLayout>
          <Hero />
          <AllComponents />
        </LandingLayout>
      )}
    </>
  );
}
