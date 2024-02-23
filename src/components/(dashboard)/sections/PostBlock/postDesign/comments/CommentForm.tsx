"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axiosInstance from "@/config/axiosConfig";

interface CommentFormProps {
  onClose: () => void;
  onSubmit: () => void;
  accessToken: string;
  userId: string;
  postId: string;
}

export const CommentForm: React.FC<CommentFormProps> = ({
  onClose,
  onSubmit,
  accessToken,
  userId,
  postId,
}) => {
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Logic to submit the comment
  
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  
    try {
      await axiosInstance.post(
        `/comments/${postId}`,
        { content: comment, user: userId },
        config
      );
  
      // Call the onSubmit prop
      onSubmit();
    } catch (error) {
      console.error("Error submitting comment:", error);
      // Handle error (show a toast, etc.)
    }
  
    // Always call onClose whether the comment submission is successful or not
    onClose();
  };
  

  return (
    <>
      <div className="flex items-center">
        <form onSubmit={handleSubmit} className="p-4">
          <textarea
            className="w-full h-20 border border-gray-300 p-2 mb-2"
            placeholder="Add a comment..."
            value={comment}
            onChange={handleCommentChange}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Add Comment
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-red-500 text-white hover:text-gray-600 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
