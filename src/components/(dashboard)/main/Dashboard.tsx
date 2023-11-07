import React from "react";

import Image from "next/image";
import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {
  const user = useSelector((state: any) => state.auth?.user);

  return (
    <div className="bg-gray-100 ">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* User Profile Section */}
      <div className="bg-white p-4 rounded shadow-md">
        <div className="flex items-center">
          <Image
            width="64"
            height="64"
            src={user.profilePicture}
            alt={user.username}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>

      {/* following section */}
      <div className="mt-4 bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold">Following</h2>
        <p className="text-gray-600">
          You are following {user.following} users
          {user.followers}
        </p>
      </div>

      {/* Followers section */}
      <div className="mt-4 bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold">Followers</h2>
        <p className="text-gray-600">
          {user.followers} users are following you
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
