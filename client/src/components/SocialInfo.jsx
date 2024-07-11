import { Link } from "react-router-dom";

export function SocialInfo({ link, children }) {
  return (
    <>
      <Link to={link} className="w-8">
        {children}
      </Link>
    </>
  );
}

