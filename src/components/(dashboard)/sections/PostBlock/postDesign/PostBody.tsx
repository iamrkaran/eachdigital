"use client"
import Image from "next/image";
import React from "react";

interface PostBodyProps {
  image: string;
  caption: string;
}

const PostBody: React.FC<PostBodyProps> = ({ image , caption }) => {
  return (
    <div className="mb-4 rounded-md">
      <Image width={500} height={500} src={image} alt="Post image" 
      className="rounded-lg"
      />
      <p className="mt-2">{caption}</p>
    </div>
  );
};

export default PostBody;
