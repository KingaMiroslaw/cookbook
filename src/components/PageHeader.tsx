import { Sun, Search, Menu, UtensilsCrossed } from "lucide-react";
import Button from "./Button";

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-4 mb-6 mx-4">
      <div className=" flex gap-6 items-center flex-shrink-0">
        <Button variant="ghost" btnType="icon">
          <Menu />
        </Button>
        <a href="/">
          <div className="flex gap-1 items-center rounded-2xl px-2 py-1 bg-orange-200">
            <UtensilsCrossed className="stroke-white" />
            <h1 className="text-orange-500 text-3xl font-link">CookBook</h1>
          </div>
        </a>
      </div>
      <div className="flex flex-grow max-w-[600px]">
        <input
          type="search"
          placeholder="Search"
          className="border border-ghost-border rounded-l-full shadow-inner shadow-ghost-hover py-1 px-4 text-lg w-full focus:border-primary-default outline-none"
        />
        <Button
          variant="ghost"
          className="py-2 px-4 border border-ghost-border rounded-r-full border-l-0 flex-shrink-0 shadow-inner shadow-ghost-hover bg-neutral-200"
        >
          <Search />
        </Button>
      </div>
      <Button variant="ghost" btnType="icon">
        <Sun />
      </Button>
    </div>
  );
};
export default PageHeader;
