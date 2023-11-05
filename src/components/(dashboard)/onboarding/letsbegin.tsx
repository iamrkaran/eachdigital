"use client";
import React, { ReactElement } from "react";

interface LetsBeginProps {
  nextStep: () => void;
  previousStep: () => void;
}

const LetsBegin: React.FC<LetsBeginProps> = ({
  nextStep,
  previousStep,
}): ReactElement => {
  return (
    <div className="bg-teal-500 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">Lets Begin</h1>
      <div>
        <button className="m-4 p-4" onClick={previousStep}>
          Previous
        </button>
        <button className="m-4 p-4" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LetsBegin;
