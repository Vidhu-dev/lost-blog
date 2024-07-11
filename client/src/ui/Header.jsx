import { Link } from "react-router-dom";
import SearchPost from "../features/post/SearchPost";
import useScrollDirection from "../hooks/useScrollDirection";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { useState } from "react";

function Header() {
  const show = useScrollDirection();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <header
      className={`border-dark sticky flex items-center justify-around gap-2 border-b py-4 ${show && "top-0"} bg-background-100 z-50 transition-all duration-1000 ease-in-out`}
    >
      <Link to="/" className="y text-2xl font-bold">
        <span className="text-text">vi</span>
        <span className="text-primary">blog</span>
      </Link>
      <div className="flex w-min items-center justify-around gap-2">
        <SearchPost />
        {!userLoggedIn ? <Button primary={true}>Signup</Button> : <Avatar />}
      </div>
    </header>
  );
}

export default Header;
