import React from "react";
import sampleUser from "@/data/userdata";
import Image from "next/image";

const Dashboard: React.FC = () => {
  const user = sampleUser;

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

      {/* Dashboard Widgets */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {user.customizableDashboard.widgets.map((widget:any) => (
          <div key={widget.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold">{widget.title}</h2>
            <p className="text-gray-600">{widget.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
