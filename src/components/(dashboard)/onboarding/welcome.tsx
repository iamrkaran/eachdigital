"use client";
import React from "react";

type Props = {
  nextStep: () => void;
};

const Welcome = ({ nextStep }: Props) => {
  return (
    <div className="bg-purple h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">
        Welcome to Your Dashboard
      </h1>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Welcome;
