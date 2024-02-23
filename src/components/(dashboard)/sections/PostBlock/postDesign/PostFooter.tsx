import React, { useState } from "react";

type PostFooterProps = {
  postId: string;
  username: string;
  caption: string;
};

const PostFooter: React.FC<PostFooterProps> = ({
  postId,
  username,
  caption,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };


  const truncatedCaption = caption.length > 200 ? caption.slice(0, 200) : caption;

  

  return (
    <div>
      <div className="flex items-center justify-left mt-4">
        <div className="flex flex-col">
          <span className="text-sm  font-bold text-gray-900 dark:text-gray-200">
            {username}
          </span>
        </div>
        {/* right caption if available */}
        {caption && (
          <div className="ml-4" >
            <span
              className="text-sm cursor-pointer text-gray-600 hover:underline"
              onClick={handleExpandClick}
            >
              {isExpanded ? truncatedCaption : `${truncatedCaption}...`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostFooter;
