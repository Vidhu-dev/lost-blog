import {
  SiGithub,
  SiLeetcode,
  SiLinkedin,
  SiX,
} from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center gap-8 border-t py-2">
      <Link>
        <SiLinkedin />
      </Link>
      <Link>
        <SiGithub />
      </Link>
      <Link>
        <SiLeetcode />
      </Link>
      <Link>
        <SiX />
      </Link>
    </div>
  );
}

export default Footer;
