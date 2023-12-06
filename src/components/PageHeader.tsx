import { Sun, Search, Menu } from "lucide-react";
import Button from "./Button";

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-4 mb-6 mx-4">
      <div className=" flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" btnType="icon">
          <Menu />
        </Button>
        <h1>LOGO</h1>
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
