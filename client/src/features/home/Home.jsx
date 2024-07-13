import Button from "../../components/Button";
import BoyLookingUp from "../../assets/BoyLookingUp";
import DisplayBoard from "../../assets/DisplayBoard";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";
function Home() {
  const windowWidth = useWindowWidth();
  const naviagte = useNavigate();
  return (
    <div className="relative flex grow justify-center">
      <div className="absolute left-4 top-16 opacity-20 sm:hidden">
        <DisplayBoard zHeigth={0.4} zWidth={0.4} />
      </div>
      <div className="relative mx-6 flex w-fit justify-center sm:mx-16 sm:flex-nowrap sm:gap-10">
        <div className="z-50 flex flex-col items-start justify-center gap-8">
          <h1 className="max-w-96 text-6xl font-bold md:text-7xl">
            Explore Learn and <span className="text-secondry "> Inspire</span>
          </h1>
          <p className="">
            Navigate a landscape of human stories intertwined with visionary
            ideas
          </p>
          <Button primary={true} onClick={() => naviagte("/sign-up")}>
            START EXPLORING <span className="text-xl font-bold"> &rarr;</span>
          </Button>
        </div>

        <div className="hidden justify-evenly opacity-50 sm:flex sm:flex-col sm:opacity-100">
          <DisplayBoard
            zWidth={0.7 * windowWidth}
            zHeigth={0.8 * windowWidth}
          />
          <BoyLookingUp
            zWidth={2 * windowWidth}
            zHeigth={0.8 * windowWidth}
            x={-72 * 4 * windowWidth}
            y={0}
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-10 opacity-20 sm:hidden">
        <BoyLookingUp zHeigth={0.6} zWidth={0.6} x={-72} />
      </div>
    </div>
  );
}

export default Home;
