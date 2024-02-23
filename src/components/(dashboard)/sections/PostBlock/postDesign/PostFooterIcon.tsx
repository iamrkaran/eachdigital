import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/config/axiosConfig";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { Like } from "@/types/like";
import { CommentForm } from "./comments/CommentForm";

type PostFooterProps = {
  postId: string;
};

const PostFooterIcon: React.FC<PostFooterProps> = ({ postId }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);
  const [likes, setLikes] = useState<Like[]>([]);
  const accessToken = useSelector((state: any) => state.auth?.accessToken);
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);

  // console.log(accessToken );
  const userId = useSelector((state: any) => state.auth?.user?._id);

  //   fetch likes by post id
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await axiosInstance.get(`/likes/${postId}`);
        setLikes(response.data.likes);
        setLikesCount(response.data.likes.length);
        setIsLiked(
          response.data.likes.some((like: Like) => like.userId === userId)
        );
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    fetchLikes();
  }, [postId, userId]);

  const handleLikeClick = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      if (isLiked) {
        // Unlike the post
        await axiosInstance.delete(`/likes/${postId}`, config);
        setLikesCount((prevLikesCount) => prevLikesCount - 1);
      } else {
        const data = {
          userId,
        };
        await axiosInstance.post(`/likes/${postId}`, data, config);
        setLikesCount((prevLikesCount) => prevLikesCount + 1);
      }

      // Toggle the like status
      setIsLiked((prevIsLiked) => !prevIsLiked);
    } catch (error) {
      console.error("Error handling like:", error);
      // Handle error (show a toast, etc.)
    }
  };

  const handleCommentClick = () => {
    setIsCommentFormOpen(true);
  };

  const closeCommentForm = () => {
    setIsCommentFormOpen(false);
  };

  const handleCommentSubmit = () => {
    console.log("Comment submitted");
    alert(`Comming soon`);
  };
  return (
    <div>
      <div className="flex items-center justify-between  mt-4 p-2 bg-white rounded-lg">
        <button onClick={handleLikeClick}>
          {isLiked ? (
            <SolidHeartIcon className="h-6 w-6 " color="red" />
          ) : (
            <HeartIcon className="h-6 w-6" />
          )}
        </button>
        {likesCount > 0 && (
          <span className="">
            {likesCount} {likesCount === 1 ? "like" : "likes"}
          </span>
        )}
        <button
          className="text-gray-500 hover:text-gray-600 focus:outline-none"
          onClick={handleCommentClick}
        >
          <ChatBubbleOvalLeftIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
          <ArrowPathRoundedSquareIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
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
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>
      </div>

      {/* //fetch comments by post  */}

      {isCommentFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <CommentForm
            onClose={closeCommentForm}
            onSubmit={handleCommentSubmit}
            accessToken={accessToken}
            userId={userId}
            postId={postId}
          />
        </div>
      )}
    </div>
  );
};

export default PostFooterIcon;
