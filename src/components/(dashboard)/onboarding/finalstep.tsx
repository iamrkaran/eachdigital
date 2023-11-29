"use client";

import { setUser } from "@/auth/authSlice";
import axiosInstance from "@/config/axiosConfig";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

interface FinalStepProps {
  previousStep: () => void;
}

const FinalStep: React.FC<FinalStepProps> = ({
  previousStep,
}): ReactElement => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.auth?.user?.id);

  const completeOnboarding = () => {
    axiosInstance
      .put(`/users/${userId}`, {
        isOnBoardingCompleted: true,
      })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-pink-600 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">Final Step</h1>
      <div>
        <button className="m-4 p-4" onClick={previousStep}>
          Previous
        </button>
        <button className="m-4 p-4 bg-blue-500" onClick={completeOnboarding}>
          <span className="text-white">Done </span>
        </button>
      </div>
    </div>
  );
};

export default FinalStep;
