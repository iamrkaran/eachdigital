import DashMain from "@/components/(dashboard)/dashMain";
import DashboardLayout from "@/components/(dashboard)/layout";
import AllComponents from "@/components/(landing)/Allcomponents";
import Hero from "@/components/(landing)/Hero";
import LandingLayout from "@/components/(landing)/layout";

export default function Home() {
  // Assuming isLoggedIn is a boolean variable
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? (
        <DashboardLayout>
          {/* Content for authenticated users (dashboard) */}
          <DashMain />
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
