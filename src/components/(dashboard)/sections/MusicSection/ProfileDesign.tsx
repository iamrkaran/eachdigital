import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { clearUser } from "@/auth/authSlice";

export const ProfileDesign = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: any) => state.auth?.user);

  const logout = () => {
    dispatch(clearUser());
    router.push("/");
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <Image
              src="/images/extra/1.png"
              alt="avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {user?.name}
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-300">
              {user?.email}
            </span>
          </div>
        </div>
        <Popover>
          <PopoverTrigger>
            <Button variant="secondary" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="py-1">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200 w-full text-left"
                onClick={() => router.push("/dashboard/profile")}
              >
                Settings
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200 w-full text-left"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
