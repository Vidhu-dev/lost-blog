import { getCategories } from "@/utils/api";
import Posts from "../post/Posts";
import Categories from "./Categories";
import FeaturedSection from "./FeaturedSection";
import { useLoaderData } from "react-router-dom";

function Home() {
  const categories = useLoaderData();
  return (
    <div className="flex w-3/4 grow flex-col items-center justify-center px-2">
      <FeaturedSection />
      <Categories categories={categories} />
      <Posts />
    </div>
  );
}

export default Home;

export async function loader() {
  const categories = await getCategories();
  return categories.data;
}
