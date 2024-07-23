import NavItem from "@/components/hybrid/NavItem";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelector } from "react-redux";

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);
  return (
    <div className="border-y py-1 w-11/12  sm:w-3/4">
      <ScrollArea className="  ">
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
