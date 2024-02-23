"use client";
import React, { useEffect, useState } from 'react';
import PostHeader from './postDesign/PostHeader';
import PostBody from './postDesign/PostBody';
import PostFooter from './postDesign/PostFooter';
import axiosInstance from '@/config/axiosConfig';
import { Like } from '@/types/like';
import ShowComments from './postDesign/comments/ShowComments';
import PostFooterIcon from './postDesign/PostFooterIcon';

const PostComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts
        const response = await axiosInstance.get<Post[]>("/posts");
        const fetchedPosts = response.data.reverse();
        setPosts(fetchedPosts);

        // Fetch unique user IDs
        const userIds = fetchedPosts.map((post) => post.author);
        const uniqueUserIds = Array.from(new Set(userIds));

        // Fetch user data for each unique user ID
        const userPromises = uniqueUserIds.map((userId) => catchUserData(userId));
        const userDataArray = await Promise.all(userPromises);

        // Create an object with user data using user IDs as keys
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

  // Function to catch user data based on user ID
  const catchUserData = async (userId: string): Promise<string> => {
    try {
      const response = await axiosInstance.get<User>(`/users/${userId}`);
      return response.data.username;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw new Error("Error fetching user data");
    }
  };

  return (
    <div className="w-full rounded-md shadow-md ">
      {posts.map((post,index) => (
        <div key={index} className='mt-4 mb-8 bg-gray-100 rounded-sm p-2'>
          {/* Post components */}
          <PostHeader username={userData[post.author]} image={userData[post.image]} postId={post._id} />
          <PostBody image={post?.image[0]} caption={post?.caption} />
          <PostFooterIcon  postId={post._id} />
          <PostFooter username={userData[post.author]} postId={post._id} caption={post?.caption}  /> 
          <ShowComments postId={post._id} />
        </div>
      ))}
    </div>
  );
};

export default PostComponent;
