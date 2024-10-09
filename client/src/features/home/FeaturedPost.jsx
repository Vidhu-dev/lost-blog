import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function FeaturedPost({ post, className }) {
  console.log(post);
  const { title, coverImage, authorDetails, updatedAt, categoryDetails } = post;

  return (
    <div className="sm:h-68 relative h-56 overflow-hidden rounded-md">
      <img src={coverImage} alt={title} className="w-full rounded-md" />

      <div className="absolute left-1 top-1 z-10 transform rounded-md bg-white bg-opacity-70 bg-clip-padding p-2 font-bold drop-shadow-2xl backdrop-blur-lg backdrop-filter sm:w-auto">
        <span className="bg-primary px-1 py-0.5 text-xs font-bold uppercase text-secondary">
          {categoryDetails.categoryName}
        </span>
        <h1 className="mt-2 font-semibold sm:text-xl">{title}</h1>
        <div className="mt-3 flex items-center text-xs sm:text-sm">
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
  );
}
export default FeaturedPost;
