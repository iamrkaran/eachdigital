
import React from "react";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/auth/authSlice";
import { useRouter } from "next/navigation";
import PostBlock from "../sections/PostBlock";
import MusicSection from "../sections/MusicSection";
import "./style.css";

const Timeline: React.FC = () => {
  const user = useSelector((state: any) => state.auth?.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const [creatingPost, setCreatingPost] = React.useState(false);

  const logout = () => {
    dispatch(clearUser());
    router.push("/");
  };

  return (
    <div className="flex">
      <div className="w-[300px] rounded shadow-md lg:block hidden">
        <MusicSection />
      </div>

      <div
        className="lg:w-[500px] sm/md:flex-grow rounded shadow-md scrollbar"
        style={{
          maxHeight: "calc(100vh)",
          scrollbarWidth: "none",
          overflow: "auto",
        }}
      >
        <PostBlock />
      </div>

      <div className="w-[300px] bg-blue p-4 rounded shadow-md lg:block hidden">
        <div>
          <p>Video section</p>
        </div>
      </div>

      <div className="w-[300px] bg-yellow p-4 rounded shadow-md lg:block hidden">
        <div>
          <p>More section</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
