import React from 'react';

interface PostHeaderProps {
  username: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ username }) => {
  
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">{username}</h2>
    </div>
  );
};

export default PostHeader;
