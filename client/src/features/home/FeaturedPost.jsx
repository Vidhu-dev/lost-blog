function FeaturedPost({ post, className }) {
  const { title, publishedAt, categoryID } = post;

  return (
    <div className="sm:h-68 relative h-56 overflow-hidden rounded-md">
      <img
        src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={title}
        className="w-full rounded-md"
      />

      <div className="absolute left-1 top-1 z-10 transform rounded-sm bg-slate-100 p-2 font-bold drop-shadow-2xl sm:w-auto">
        <span className="bg-primary px-1 py-0.5 text-xs font-bold uppercase text-secondary">
          {categoryID}
        </span>
        <h1 className="mt-2 font-semibold sm:text-xl">{title}</h1>
        <div className="mt-3 flex items-center text-xs sm:text-sm">
          <img
            src="/cover.svg"
            alt="Author"
            className="mr-1 h-4 w-4 rounded-full object-cover sm:h-8 sm:w-8"
          />
          <p className="text-gray-700">Jason Francisco</p>
          <span className="mx-1 text-gray-500">•</span>
          <p className="text-gray-500">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
export default FeaturedPost;
