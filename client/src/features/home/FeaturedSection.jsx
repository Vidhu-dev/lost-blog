import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedPost from "./FeaturedPost";
import Autoplay from "embla-carousel-autoplay";


function FeaturedSection({ topRatedPosts }) {
  console.log(topRatedPosts);
  return (
    <>
      <ul className="flex items-start justify-center gap-2 py-2">
        <Carousel
          className="w-3/4"
          opts={{
            loop: true,
            watchDrag: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {topRatedPosts.map((post) => (
              <CarouselItem key={post.title} className=" ">
                <FeaturedPost post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ul>
    </>
  );
}

export default FeaturedSection;
