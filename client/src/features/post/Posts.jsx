import PostSummary from "./PostSummary"

function Posts({ posts }) {
  return (
    <ul className="my-8 flex flex-col gap-4 sm:w-3/4">
      {posts?.map((post) => (
        <PostSummary key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default Posts;
