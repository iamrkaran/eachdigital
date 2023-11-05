"use client";
import React, { useState } from 'react';

import sampleUser from "@/data/userdata";
import Dashboard from './main/Dashboard';
import OnboardingSteps from './onboarding/OnboardingSteps';

export default function DashMain() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(sampleUser.onboardingCompleted);

  const handleFinishOnboarding = () => {
    setIsOnboardingCompleted(true);
  };

  return (
    <div>
      <main>
        {isOnboardingCompleted ? (
          <Dashboard />
        ) : (
          <OnboardingSteps onFinish={handleFinishOnboarding} />
        )}
      </main>
    </div>
  );
}
