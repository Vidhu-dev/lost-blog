import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedPost from "./FeaturedPost";
import Autoplay from "embla-carousel-autoplay";

const posts = [
  {
    authorID: "60d0fe4f5311236168a109ca",
    title: "The Future of Artificial Intelligence",
    content: `AI is revolutionizing industries by learning from data and performing tasks that require human intelligence. It's enhancing decision-making, improving efficiency, and creating new opportunities in sectors like healthcare and finance. AI's ability to automate processes and provide insights is transforming how businesses operate.`,
    status: "published",
    publishedAt: new Date("2023-07-14T10:00:00Z"),
    categoryID: "60d0fe4f5311236168a109cb",
    coverImage: "https://example.com/ai.jpg",
    likes: 30,
  },
  {
    authorID: "60d0fe4f5311236168a109ca",
    title: "Blockchain: The Future of Transactions",
    content: `Blockchain technology is transforming transactions with its decentralized and secure nature. It's being used in finance, supply chain, and voting systems, providing transparency and security. Blockchain's potential to revolutionize how we store and transfer data is driving its widespread adoption.`,
    status: "published",
    publishedAt: new Date("2023-07-15T11:00:00Z"),
    categoryID: "60d0fe4f5311236168a109cc",
    coverImage: "https://example.com/blockchain.jpg",
    likes: 42,
  },
  {
    authorID: "60d0fe4f5311236168a109ca",
    title: "The Internet of Things (IoT)",
    content: `The IoT connects everyday devices to the internet, enabling them to communicate and share data. This connectivity is creating smart homes, smart cities, and enhancing industries like agriculture and manufacturing. IoT is making our lives more convenient and efficient by automating routine tasks.`,
    status: "published",
    publishedAt: new Date("2023-07-16T12:00:00Z"),
    categoryID: "60d0fe4f5311236168a109cd",
    coverImage: "https://example.com/iot.jpg",
    likes: 35,
  },
  {
    authorID: "60d0fe4f5311236168a109ca",
    title: "5G Connectivity and Its Impact",
    content: `The rollout of 5G networks is set to revolutionize communication with faster and more reliable internet connections. This technology will enable innovations such as autonomous vehicles, remote surgeries, and enhanced virtual reality experiences, transforming how we interact with the digital world.`,
    status: "published",
    publishedAt: new Date("2023-07-17T13:00:00Z"),
    categoryID: "60d0fe4f5311236168a109ce",
    coverImage: "https://example.com/5g.jpg",
    likes: 28,
  },
  {
    authorID: "60d0fe4f5311236168a109ca",
    title: "Quantum Computing: The Next Frontier",
    content: `Quantum computing promises to solve complex problems beyond the capabilities of classical computers. While still in its early stages, it has the potential to revolutionize fields like cryptography, materials science, and drug discovery, offering unprecedented computational power for future innovations.`,
    status: "published",
    publishedAt: new Date("2023-07-18T14:00:00Z"),
    categoryID: "60d0fe4f5311236168a109cf",
    coverImage: "https://example.com/quantum.jpg",
    likes: 50,
  },
];

function FeaturedSection() {
  return (
    <>
      <ul className="flex items-start justify-center   gap-2 py-2">
        <Carousel
          className="w-3/4"
          opts={{
            loop: true,
            watchDrag: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {posts.map((post) => (
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
