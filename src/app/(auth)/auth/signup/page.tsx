"use client";
import LandingLayout from "@/components/(landing)/layout";
import Link from "next/link";
import signup from "@/actions/signup-action";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Signup() {
  const navigate = useRouter();
  const [formData, setFormData] = useState<SignupFormData>({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const form = new FormData(e.currentTarget);
      setFormData({
        password: form.get("password") as string,
        email: form.get("email") as string,
        username: form.get("username") as string,
      });
      signup(formData).then((response) => {
        toast.success("Signed up successfully");
        navigate.push("/login");
      });
    } catch (error) {
      // Display error message
      toast.error("Signup failed. Please try again.");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <LandingLayout>
      <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-purple-500 to-primary">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="johndoe"
              />
            </div>
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-primary hover:opacity-70 text-white rounded-lg py-2 "
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-600 text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-blue-500 hover:underline">Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </LandingLayout>
  );
}
