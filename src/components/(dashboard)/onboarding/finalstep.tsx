"use client";
import React, { ReactElement } from "react";

interface FinalStepProps {
  closeStep: () => void;
  previousStep: () => void;
}

const FinalStep: React.FC<FinalStepProps> = ({
  closeStep,
  previousStep,
}): ReactElement => {
  return (
    <div className="bg-pink h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">Final Step</h1>
      <div>
        <button className="m-4 p-4" onClick={previousStep}>
          Previous
        </button>
        <button className="m-4 p-4 bg-blue-500" onClick={closeStep}>
          <span className="text-white">Done </span>
        </button>
      </div>
    </div>
  );
};

export default FinalStep;
