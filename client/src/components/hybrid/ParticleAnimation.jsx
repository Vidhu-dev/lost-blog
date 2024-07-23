import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadSVGPath } from "@tsparticles/path-svg";
import optionsJSONConfig from "../../utils/particleConfig.json";
const ParticleAnimation = ({ optionsJSON }) => {
  const [init, setInit] = useState(false);
  if (optionsJSON === undefined) {
    optionsJSON = optionsJSONConfig;
  }
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSVGPath(engine);
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => optionsJSON, [optionsJSON]);

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticleAnimation;
