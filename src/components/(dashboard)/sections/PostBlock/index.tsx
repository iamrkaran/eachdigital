import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CreatePost />
      <Post />
    </div>
  );
};

export default Index; 
