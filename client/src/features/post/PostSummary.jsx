import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function PostSummary({ post }) {
  const { title, content, publishedAt, categoryID, coverImage, likes } = post;

  return (
    <li className="flex cursor-pointer flex-wrap-reverse gap-2 border-y p-4 transition-transform ease-in-out hover:scale-105 sm:flex-nowrap">
      <div>
        <span className="bg-primary px-1 py-0.5 text-xs font-bold uppercase text-white">
          {categoryID}
        </span>

        <h1 className="font-semibold sm:text-xl">{title}</h1>
        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <Avatar className="mr-1 h-6 w-6">
            <AvatarImage src="/cover.svg" />
            <AvatarFallback>UA</AvatarFallback>
          </Avatar>
          <p className="">Jason Francisco</p>
          <span>•</span>
          <p className="">{new Date(publishedAt).toLocaleDateString()}</p>
          <span>•</span>
          <p>Likes: {likes}</p>
        </div>
        <p className=" ">
          {content.length > 100 ? `${content.slice(0, 200)}...` : content}
        </p>
      </div>
      <img
        src={coverImage}
        alt={title}
        className="h-32 w-full object-cover sm:h-full sm:w-64"
      />
    </li>
  );
}

export default PostSummary;
