import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadSVGPath } from "@tsparticles/path-svg";

const AnimateComponent = ({
  bgColor = "#EBEBEB",
  particleColor = "#000",
  filePath = "/avatars/Head-12.svg",
}) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSVGPath(engine);
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
      },
      style: {
        position: "absolute",
      },
      background: {
        color: {
          value: bgColor,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          // onHover: {
          //   enable: true,
          //   mode: "repulse",
          // },
        },
        modes: {
          push: {
            quantity: 0,
          },
          repulse: {
            distance: 50,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },

        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "image",
          options: {
            image: {
              src: filePath,
            },
          },
        },
        size: {
          value: { min: 5, max: 24 },
        },
      },
      detectRetina: true,
    }),
    [bgColor, filePath, particleColor],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default AnimateComponent;
