import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DispalyPostContent from "./DispalyPostContent";
import { useNavigate } from "react-router-dom";

function PostSummary({ post }) {
  const {
    title,
    coverImage,
    likes,
    summary,
    authorDetails,
    updatedAt,
    categoryDetails,
    _id,
  } = post;
  const nav = useNavigate();
  function handlePostClick() {
    nav(`/post/${_id}`);
  }
  return (
    <li
      className="flex cursor-pointer flex-wrap-reverse justify-between gap-6 border-y p-4 transition-transform ease-in-out hover:scale-105 sm:flex-nowrap"
      onClick={handlePostClick}
    >
      <div>
        <span className="bg-primary px-1 py-0.5 text-xs font-bold uppercase text-white">
          {categoryDetails.categoryName}
        </span>

        <h1 className="font-semibold sm:text-xl">{title}</h1>
        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <Avatar className="mr-1 h-6 w-6">
            <AvatarImage src="/cover.svg" />
            <AvatarFallback>UA</AvatarFallback>
          </Avatar>
          <p className="">{authorDetails.fullName}</p>
          <span>•</span>
          <p className="">{new Date(updatedAt).toLocaleDateString()}</p>
          <span>•</span>
          <p>Likes: {likes}</p>
        </div>
        <p className="line-clamp-3">{summary}</p>
      </div>
      <img
        src={coverImage}
        alt={title}
        className="h-40 w-full rounded-xl object-cover object-center sm:h-40 sm:w-64"
      />
    </li>
  );
}

export default PostSummary;
