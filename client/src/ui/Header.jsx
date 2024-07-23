import Logo from "@/assets/Logo";
import NavItem from "@/components/hybrid/NavItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { logout } from "@/features/auth/authSlice";

import { Menu, PenLine, SearchIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const { isAuthenticated, accessToken } = useSelector((state) => state.auth);
  const { avatar } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  function handleLogout() {
    const formData = new FormData();
    formData.append("accessToken", accessToken);
    const data = Object.fromEntries(formData);

    toast.dismiss();
    toast.promise(dispatch(logout({ data })).unwrap(), {
      loading: "Logging out...",
      success: () => "Logged out successfully",
      error: (err) => err,
    });
  }
  return (
    <div className="mt-1 flex items-center justify-around border-y py-1 text-black/70 backdrop-blur sm:py-0">
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 sm:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 font-display text-lg font-medium">
              <NavLink
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Logo zHeigth={0.1} zWidth={0.1} />
                <span className=" ">vi-blog</span>
              </NavLink>
              <NavLink to="#" className="hover:text-foreground">
                Home
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Blogs
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                <span className="mr-2">Write</span> <PenLine width={18} />
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <NavLink to="/" className="flex items-center gap-1">
          <Logo zHeigth={0.125} zWidth={0.125} />
          <span className="font-semibold text-black">vi-blog</span>
        </NavLink>
        <NavigationMenu orientation="vertical">
          <NavigationMenuList>
            <NavItem to={"/"}>Home</NavItem>
            <NavItem>Blogs</NavItem>
            <NavItem>
              <PenLine width={14} /> <span className="ml-2">Write</span>
            </NavItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-0 pl-2" />
        <Input placeholder="Search" className="pl-8" />
      </div>
      <DropdownMenu>
        {isAuthenticated ? (
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={avatar} />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
        ) : (
          <div className="flex gap-4">
            <NavLink
              to="/login"
              className={({ isActive }) => isActive && "hidden"}
            >
              <Button
                variant={
                  location.pathname === "/sign-up" ? "default" : "outline"
                }
              >
                Login
              </Button>
            </NavLink>
            <NavLink
              to="/sign-up"
              className={({ isActive }) => isActive && "hidden"}
            >
              <Button>Sign up</Button>
            </NavLink>
          </div>
        )}

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Header;
