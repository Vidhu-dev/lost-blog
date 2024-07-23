import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchPost from "../features/post/SearchPost";
import { useScrollDirection } from "../hooks/useScrollDirection";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { useState } from "react";
import Logo from "../assets/Logo";
import { useSelector } from "react-redux";

function Header() {
  const show = useScrollDirection();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { avatar } = useSelector((state) => state.user);
  const naviagate = useNavigate();
  const currentRoute = useLocation();
  return (
    <header
      className={`sticky flex justify-around border-b border-dark py-2 ${show && "top-0"} z-50 bg-background-100 transition-all duration-1000 ease-in-out`}
    >
      <Link to="/" className="flex items-center gap-2 text-3xl font-bold">
        <div>
          <Logo fillColor={"fill-primary"} zHeigth={0.145} zWidth={0.145} />
        </div>
        <p>
          <span className="text-text">vi</span>
          <span className="text-primary">blog</span>
        </p>
      </Link>
      <div className="flex items-center justify-center gap-8">
        <SearchPost />
        {!isAuthenticated ? (
          currentRoute.pathname !== "/sign-up" && (
            <div className="flex gap-4">
              <Button onClick={() => naviagate("/login")}>Login</Button>
              <Button onClick={() => naviagate("/sign-up")} primary={true}>
                Signup
              </Button>
            </div>
          )
        ) : (
          <img src={avatar} alt="user avatar" className="h-12 w-10" />
        )}
      </div>
    </header>
  );
}

export default Header;
