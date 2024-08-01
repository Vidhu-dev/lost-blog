import { Link } from "react-router-dom";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

function NavItem({ children, to, className }) {
  return (
    <NavigationMenuItem className={className}>
      <Link to={to} >
        <NavigationMenuLink  className={navigationMenuTriggerStyle()}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default NavItem;
