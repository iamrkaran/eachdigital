"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData, clearUserData } from '@/features/auth/authSlice';
import axiosInstance from '@/config/axiosConfig';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.auth?.user?._id);
  const [userData, setUserData] = useState<any>(null); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`/users/${userId}`);  
        const user = response.data; 
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [dispatch, userId]);

  const router=useRouter();

  const logout = () => {
    dispatch(clearUserData());
    router.push("/");
  };


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4 text-white">
        <h2 className="text-2xl font-semibold">Sidebar Features</h2>
        {/* Add various sidebar features here */}
        <ul className="mt-4">
          <li className="py-2">Feature 1</li>
          <li className="py-2">Feature 2</li>
          {/* Add more features as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h1 className="text-3xl font-semibold mb-4">Profile Page</h1>

        {/* Display Profile Data */}
        {userData && (
          <div className="mb-4">
            <p>
              <b>Username:</b> {userData.username}
            </p>
            
            <p>
              Email :{userData.email}
            </p>
            <Button
            variant="destructive"
                className=" px-4 py-2 text-sm   text-left"
                onClick={logout}
              >
                Logout
              </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
