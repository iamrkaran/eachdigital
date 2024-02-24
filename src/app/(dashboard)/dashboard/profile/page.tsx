"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUserData } from "@/features/auth/authSlice";
import axiosInstance from "@/config/axiosConfig";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.auth?.user?._id);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`/users/${userId}`);
        const user = response.data;
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [dispatch, userId]);

  const router = useRouter();

  const logout = () => {
    dispatch(clearUserData());
    router.push("/");
  };

  if (!userData) {
    return <p>Loading...</p>; // Add a loading indicator while fetching data
  }

  return (
    <div className="container mx-auto h-screen p-4 bg-gradient-to-l from-purple-500 to-primary">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{userData?.username}&apos;s Profile</h1>
        <Button onClick={logout}>Logout</Button>
      </div>

      {/* Display user information */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Image
            width={100}
            height={100}
            src={userData?.profilePicture ?? "/images/extra/1.png"}
            alt={`${userData?.username}'s profile`}
            className="w-full h-auto rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
          <p>Email: {userData?.email}</p>
          <p>Username: {userData?.username}</p>

          {/* Add more user details as needed */}
        </div>
        <div>
          {/* Add additional features like friend list, posts, etc. */}

          <h2 className="text-lg font-semibold mb-2">Friends</h2>
          <ul>
            {userData?.friends?.map((friend: any) => (
              <li key={friend._id}>{friend.username}</li>
            ))} 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
