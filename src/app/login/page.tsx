"use client";
import LandingLayout from "@/components/(landing)/layout";
import Link from "next/link";

const Login = () => {
  return (
    <LandingLayout>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">Log In</h2>
          <form>
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
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-500 text-white rounded-lg py-2 hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
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
