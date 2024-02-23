import React, { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosConfig";

interface ShowCommentsProps {
  postId: string;
}

type Comment = {
  _id: string;
  content: string;
  user: string;
  createdDate: Date;
};

const ShowComments: React.FC<ShowCommentsProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axiosInstance.get(`/comments/${postId}`);
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
        // Handle error (show a toast, etc.)
      }
    };

    fetchComments();
  }, [postId]);

  const handleToggleComments = () => {
    setShowAllComments(!showAllComments);
  };

  return (
    <div>
      {comments.length > 0 && (
        <>
          {showAllComments ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment._id}>{comment.content}</li>
              ))}
            </ul>
          ) : (
            <button onClick={handleToggleComments}>
              View all {comments.length} comments
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ShowComments;
