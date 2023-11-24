import { useDropzone } from "react-dropzone";
import axiosInstance from "@/config/axiosConfig";
import {
  CameraIcon,
  XMarkIcon,
  VideoCameraIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import React, { ChangeEvent, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { AlertDialogDemo } from "./AlertDialogTest";

const CreatePost = () => {
  const userId = useSelector((state: any) => state.auth?.user?._id);
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [textArea, setTextArea] = useState(false);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleCreatePost = async () => {
    try {
      if (file && userId) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("caption", caption);
        formData.append("user", userId);

        await axiosInstance.post("/posts", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setFile(null);
        setCaption("");
      }
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  const handleDeselectImage = () => {
    setFile(null);
  };

  const activateTextArea = () => {
    textArea ? setTextArea(false) : setTextArea(true);
  };

  return (
    <div className=" max-w-lg p-4">
      <div className="w-full max-w-xl">
        {/* Center Section with Input Bar and Icons */}
        <div className="relative flex items-center w-full mb-4">
          <div className="m-4 ">
            {/* Setting Icon */}
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <div className="flex-grow">
            <input
              className="bg-secondary  rounded-md p-2 pl-10 w-full focus:outline-none resize-none"
              placeholder="What's on your mind?"
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Right Section with Write Post, Upload Photo, and Upload Video Icons */}
      <div className="flex items-center  space-x-4 mb-4">
        <div
          className="flex items-center border-r pr-4"
          onClick={activateTextArea}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <span>Write Post</span>
        </div>
        <div
          className="flex items-center border-r cursor-pointer pr-4"
          {...getRootProps()}
        >
          <CameraIcon className="w-6 h-6 mr-2" />
          <span>Upload Photo</span>
        </div>
       
        <AlertDialogDemo/>
      </div>

      {textArea && (
        <div className="w-full max-w-xl">
          <div className="relative">
            <textarea
              placeholder="Write something here..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              name="caption"
              className="bg-secondary rounded-md p-2 pl-10 w-full focus:outline-none resize-none"
            />

            <PencilIcon className="w-4 h-4  text-gray-400 absolute left-3 top-5  transform -translate-y-1/2" />
          </div>
        </div>
      )}

      {/* Selected Image Section */}
      {file && (
        <div className="flex items-center m-4">
          <div className="relative w-16 h-16">
            {/* Selected Image */}
            <Image
              src={URL.createObjectURL(file)}
              alt="Selected Image"
              layout="fill"
              className="rounded-md"
            />
            {/* Cross Icon for Deselection */}
            <XMarkIcon
              className="w-4 h-4 absolute top-1 right-1 text-muted cursor-pointer"
              onClick={handleDeselectImage}
            />
          </div>
        </div>
      )}

      <Button
        className="w-full bg-gradient-to-r from-purple-500 to-primary hover:opacity-70 max-w-lg"
        onClick={handleCreatePost}
      >
        Create Post
      </Button>
    </div>
  );
};

export default CreatePost;
