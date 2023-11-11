"use client";
import React, { ReactElement } from "react";

interface EditDashboardProps {
  nextStep: () => void;
  previousStep: () => void;
}

const EditDashboard: React.FC<EditDashboardProps> = ({ 
  nextStep,
  previousStep,
}): ReactElement => {
  return (
    <div className="bg-green h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">Edit Dashboard</h1>
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

export default EditDashboard;
