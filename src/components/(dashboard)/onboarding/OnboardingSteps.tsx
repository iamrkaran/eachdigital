"use client";
import React, { ReactElement, useState } from "react";
import Editdashboard from "./Editdashboard";
import Finalstep from "./finalstep";
import Letsbegin from "./letsbegin";
import Welcome from "./welcome";


function OnboardingSteps(): ReactElement {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };



  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Welcome nextStep={nextStep} />;
      case 2:
        return <Letsbegin nextStep={nextStep} previousStep={previousStep} />;
      case 3:
        return (
          <Editdashboard nextStep={nextStep} previousStep={previousStep} />
        );
      case 4:
        return <Finalstep previousStep={previousStep} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}

export default OnboardingSteps;
