import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/config/axiosConfig";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { Like } from "@/types/like";
import { CommentForm } from "./comments/CommentForm";


type PostFooterProps = {
  postId: string;
  likes: Like[];
};

const PostFooter: React.FC<PostFooterProps> = ({ postId, likes }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(likes.length);
  const accessToken = useSelector((state: any) => state.auth?.accessToken);
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);

  // console.log(accessToken );
  const userId = useSelector((state: any) => state.auth?.user?._id);

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
    // Logic to handle comment submission (e.g., update comments in state)
    // This function can be passed to CommentForm
    // ...
  };
  return (
    <div>
      <div className="flex items-center justify-between mt-4 space-x-4">
        <button
          className={`text-${isLiked ? "red" : "gray"}-500 hover:text-${
            isLiked ? "red" : "gray"
          }-600 focus:outline-none`}
          onClick={handleLikeClick}
        >
          <HeartIcon className="h-6 w-6" />
          {likesCount > 0 && (
            <span className="ml-1">
              {likesCount} {likesCount === 1 ? "like" : "likes"}
            </span>
          )}
        </button>
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
          <ArrowUpTrayIcon className="h-6 w-6" />
        </button>

      </div>

      {/* //fetch comments by post  */}

      
      {isCommentFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <CommentForm onClose={closeCommentForm} onSubmit={handleCommentSubmit} 
          accessToken={accessToken} userId={userId} postId={postId}
          />
        </div>
      )}
    </div>
  );
};

export default PostFooter;
