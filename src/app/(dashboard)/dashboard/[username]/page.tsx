"use client";
import React from "react";
import { useSelector } from "react-redux";

import Timeline from "@/components/(dashboard)/main/Timeline";
import OnboardingSteps from "@/components/(dashboard)/onboarding/OnboardingSteps";
import { useRouter } from "next/navigation";

export default function DashboardContent() {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const isOnboardingCompleted = useSelector(
    (state: any) => state.auth?.user?.isOnBoardingCompleted
  );

  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    router.push("/");
  }

  return (
    <div>
      <main>
        {isAuthenticated && !isOnboardingCompleted && <OnboardingSteps />}
        {isAuthenticated && isOnboardingCompleted && <Timeline />}
      </main>
    </div>
  );
}
