import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";
import Twitter from "../assets/Twitter";
import { SocialInfo } from "../components/SocialInfo";

function Footer() {
  return (
    <footer className="flex h-24 items-center justify-around border-b border-t border-b-dark border-t-dark bg-background-100">
      <SocialInfo link="https://github.com">
        <Github fillColor={"fill-background-500"} />
      </SocialInfo>
      <SocialInfo link="https://linkedin.com">
        <Linkedin fillColor={"fill-background-500"} />
      </SocialInfo>
      <SocialInfo link="https://twitter.com">
        <Twitter fillColor={"fill-background-500"} />
      </SocialInfo>
    </footer>
  );
}

export default Footer;
