"use client";import axiosInstance from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { ChatBubbleOvalLeftIcon, HeartIcon, UserCircleIcon , ArrowUpTrayIcon, ArrowPathRoundedSquareIcon  } from "@heroicons/react/24/outline";
import Image from "next/image";

const Post: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<Post[]>("/posts");
        const fetchedPosts = response.data.reverse();
        setPosts(fetchedPosts);

        const userIds = fetchedPosts.map((post) => post.user);
        const uniqueUserIds = Array.from(new Set(userIds));
        const userPromises = uniqueUserIds.map((userId) => catchUserData(userId));
        const userDataArray = await Promise.all(userPromises);

        const userDataObject: { [key: string]: string } = {};
        uniqueUserIds.forEach((userId, index) => {
          userDataObject[userId] = userDataArray[index];
        });

        setUserData(userDataObject);
      } catch (error: any) {
        console.error("Error fetching posts:", error.message);
        setError("Error fetching posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const catchUserData = async (userId: string): Promise<string> => {
    try {
      const response = await axiosInstance.get<User>(`/users/${userId}`);
      return response.data.username;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw new Error("Error fetching user data");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {posts.map((post) => (
        <div key={post._id} className="mb-4">
          <div className="flex items-center space-x-4">
            <UserCircleIcon className="h-8 w-8 text-gray-600" />
            <div>
              <p className="font-semibold text-gray-700">{userData[post.user]}</p>
              <p className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleString()}</p>
            </div>
          </div>

          <Image src={post.imageUrl} alt={`Post image by ${userData[post.user]}`} width={500} height={500} className="rounded-md w-full  mt-4 max-w-lg" />

          <p className="text-gray-700 mt-2">{post.caption}</p>

          <div className="flex items-center justify-between mt-4 space-x-4">
            <button className="text-red-500 hover:text-red-600 focus:outline-none">
              <HeartIcon className="h-6 w-6" />
            </button>
            <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
              <ChatBubbleOvalLeftIcon className="h-6 w-6" />
            </button>
            <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
              <ArrowPathRoundedSquareIcon className="h-6 w-6" />
            </button>
            <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
              <ArrowUpTrayIcon className="h-6 w-6" />
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Post;
