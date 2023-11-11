"use client";
import DashboardLayout from "@/components/(dashboard)/layout";
import AllComponents from "@/components/(landing)/Allcomponents";
import Hero from "@/components/(landing)/Hero";
import LandingLayout from "@/components/(landing)/layout";
import DashboardContent from "./(dashboard)/dashboard/[username]/page";
import { useSelector } from "react-redux";

export default function Home() {
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
          {/* Content for non-authenticated users (landing page) */}
          <Hero />
          <AllComponents />
        </LandingLayout>
      )}
    </>
  );
}
