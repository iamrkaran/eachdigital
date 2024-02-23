import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import React from "react";

interface PostHeaderProps {
  username: string;
  image: string;
  postId: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ username, image, postId }) => {
  const userIamge = image ? image : "/images/extra/1.png";
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src={userIamge} alt="avatar" />
          <AvatarFallback> {username} </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm ml-2 font-semibold text-gray-700 dark:text-gray-200">
            {username}
          </span>
        </div>
      </div>

      {/* End more button to show details about the posts  */}
      <div className="flex items-center">
        <button
          className="focus:outline-none"
          onClick={() => alert(`Post ID: ${postId}`)}
        >
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
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostHeader;
