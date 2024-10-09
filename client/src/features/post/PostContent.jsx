import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { get_postContent } from "@/utils/api";
import DispalyPostContent from "./DispalyPostContent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function PostContent() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPostData = async () => {
      try {
        const response = await get_postContent(id);
        console.log(response);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };
    getPostData();

    console.log(id);
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!post) {
    return <div>Post not found</div>;
  }

  const {
    title,
    coverImage,
    authorDetails,
    updatedAt,
    categoryDetails,
    content,
  } = post;
  return (
    <div className="mx-auto w-full md:w-3/4">
      <div className="w-full space-y-4 rounded-lg bg-white p-6">
        {/* <h2 className="text-xl font-semibold text-gray-800">{title}</h2> */}

        <div className="h-48 w-full overflow-hidden rounded-md bg-gray-100">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-1 w-fit">
          <span className="bg-primary px-1 py-0.5 text-xs font-bold uppercase text-secondary w-fit rounded-md">
            {categoryDetails.categoryName}
          </span>

          <div className="flex items-center text-xs sm:text-sm">
            <Avatar className="mr-1 h-4 w-4 sm:h-8 sm:w-8">
              <AvatarImage src={authorDetails.avatar} />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>

            <p className="text-gray-700">{authorDetails.fullName}</p>
            <span className="mx-1 text-gray-500">•</span>
            <p className="text-gray-500">
              {new Date(updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div>
        <DispalyPostContent post={JSON.parse(content)} />
      </div>
    </div>
  );
}

export default PostContent;
