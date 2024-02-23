import React from "react";
import CreatePost from "./CreatePost";
import PostComponnets from "./PostComponent";


const Index = () => {
  return (
    <div className="flex flex-col mx-auto">
      <CreatePost />
      <PostComponnets />
    </div>
  );
};

export default Index; 
