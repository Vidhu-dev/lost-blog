import ParticleAnimation from "./ParticleAnimation";
import particleConfig from "../../utils/particleConfig.json";

function Background() {
  // particleConfig.particles.size.value.max = 10;
  particleConfig;

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-0 opacity-5">
      <ParticleAnimation optionsJSON={particleConfig} />
    </div>
  );
}

export default Background;
