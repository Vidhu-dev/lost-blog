import Posts from "../post/Posts";
import Categories from "./Categories";
import FeaturedSection from "./FeaturedSection";

function Home() {
  return (
    <div className="flex w-3/4 grow flex-col items-center justify-center  px-2">
      <FeaturedSection />
      <Categories />
      <Posts />
    </div>
  );
}

export default Home;
