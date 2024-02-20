"use client";
// Import necessary dependencies and actions
import { setUserData } from "@/features/auth/authSlice";
import axiosInstance from "@/config/axiosConfig";
import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// Interface for component props
interface FinalStepProps {
  previousStep: () => void;
}

// React component
const FinalStep: React.FC<FinalStepProps> = ({
  previousStep,
}): ReactElement => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.auth?.user?._id);
  const accessToken = useSelector((state: any) => state.auth?.accessToken);

  const router = useRouter();

  // State for loading
  const [loading, setLoading] = useState(false);

  // State for errors
  const [error, setError] = useState<string | null>(null);

  const completeOnboarding = async () => {
    try {
      // Set loading to true during the API call
      setLoading(true);
      // Make API request to mark onboarding as completed
      const response = await axiosInstance.put(
        `/users/${userId}`,
        {
          isOnBoardingComplete: true,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Dispatch the updated user data to Redux store
      dispatch(
        setUserData({ userData: response.data, accessToken: accessToken })
      );

      // Navigate to the next step or perform any other action
      router.push(`/dashboard/${response.data.username.toLowerCase()}`);
      // (replace this with your actual logic)
      // navigateNextStep();
    } catch (err) {
      // Handle errors
      setError("Error completing onboarding");
      console.error("Error completing onboarding:", err);
    } finally {
      // Set loading back to false after API call is complete
      setLoading(false);
    }
  };

  return (
    <div className="bg-pink-600 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">Final Step</h1>
      <div>
        <button className="m-4 p-4" onClick={previousStep}>
          Previous
        </button>
        <button
          className="m-4 p-4 bg-blue-500"
          onClick={completeOnboarding}
          disabled={loading} // Disable the button when loading
        >
          <span className="text-white">
            {loading ? "Completing..." : "Done"}
          </span>
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default FinalStep;
