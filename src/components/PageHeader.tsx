import { Sun, Search, Menu, UtensilsCrossed, ArrowLeft } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-4 mb-6 mx-4">
      <div
        className={`flex gap-6 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
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
      <form
        className={` gap-6 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden sm:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            btnType="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}

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
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          btnType="icon"
          variant="ghost"
          className="sm:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" btnType="icon">
          <Sun />
        </Button>
      </div>
    </div>
  );
};
export default PageHeader;
