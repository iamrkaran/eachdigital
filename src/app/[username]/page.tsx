
"use client"
import Dashboard from '@/components/(dashboard)/main/Dashboard';
import OnboardingSteps from '@/components/(dashboard)/onboarding/OnboardingSteps';
import { useSelector } from 'react-redux';


export default function DashboardContent() {
    const isAuthenticated: boolean = useSelector((state: any) => state.auth.isAuthenticated);
    const isOnboardingCompleted: boolean = useSelector((state: any) => state.auth?.user?.isOnBoardingCompleted);

  return (
    <div>
      <main>
        {isAuthenticated ? (isOnboardingCompleted ? <Dashboard /> : <OnboardingSteps />):<h1>Not Authenticated</h1> }
      </main>
    </div>
  );
}
