import NavItem from "@/components/hybrid/NavItem";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useSelector } from "react-redux";

function Categories({categories}) {
  
  return (
    <div className="w-11/12 border-y py-1 sm:w-3/4">
      <ScrollArea className=" ">
        <NavigationMenu>
          <NavigationMenuList>
            {categories.map((category) => (
              <NavItem to="/" key={category._id}>
                {category.categoryName}
              </NavItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default Categories;
