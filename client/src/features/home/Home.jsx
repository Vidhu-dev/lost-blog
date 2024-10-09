import { get_TopRatedPosts, get_all_posts, get_categories } from "@/utils/api";
import Posts from "../post/Posts";
import Categories from "./Categories";
import FeaturedSection from "./FeaturedSection";
import { useLoaderData } from "react-router-dom";
// import { getCategories } from "./categorySlice";
// import { useSelector } from "react-redux";

function Home() {
  const { posts, categories, topRatedPosts } = useLoaderData();
  console.log(categories);
  console.log(posts);
  return (
    <div className="flex w-3/4 grow flex-col items-center justify-center px-2">
      <FeaturedSection topRatedPosts={topRatedPosts}/>
      <Categories categories={categories} />
      <Posts posts={posts} />
    </div>
  );
}

export default Home;

export async function loader() {
  const posts = await get_all_posts();
  const categories = await get_categories();
  const topRatedPosts = await get_TopRatedPosts()
  return {
    posts: posts?.data,
    categories : categories?.data,
    topRatedPosts : topRatedPosts?.data
  };
}
