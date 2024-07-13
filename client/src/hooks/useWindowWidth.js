import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth / 1920);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth / 1920);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [windowWidth]);

  return windowWidth;
};

export { useWindowWidth };
