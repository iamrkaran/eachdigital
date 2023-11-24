"use client";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import LandingLayout from "@/components/(landing)/layout";
import Link from "next/link";

import axiosInstance from "@/config/axiosConfig";
import { setUser } from "@/auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        // Validate the form data here (e.g., check for empty fields, format, etc.)
        if (!formData.email || !formData.password) {
          setError("Please fill in all fields.");
          return;
        }
        // Make a POST request to your authentication endpoint
        // Replace axiosInstance.post with your actual API call
        const response = await axiosInstance.post("/auth/signin", formData);

        dispatch(setUser(response.data));
        const username = response.data.username;
        toast.success("Logged in successfully");
        router.push(`/dashboard/${username}`);
      } catch (error) {
        // Handle network errors or other exceptions
        setError("An error occurred while logging in. Please try again.");
      }
    },
    [formData, dispatch, router]
  );

  return (
    <LandingLayout>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">Log In</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-primary hover:opacity-70 text-white rounded-lg py-2 "
            >
              Log In
            </button>
          </form>
          {error && (
            <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
          )}
          <p className="text-gray-600 text-sm mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span className="text-blue-500 hover:underline">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Login;
