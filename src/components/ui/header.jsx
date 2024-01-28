import { useSearchParams } from "react-router-dom";
import SearchInput from "./searchInput";
import Select from "./select";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const search = searchParams.get("search");

  const handleClear = () => {
    setSearchParams({ sort: "", search: "" });
  };

  return (
    <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
          <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
          <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>
          <SearchInput />
        </div>
        <div className="flex items-center">
          {(sort || search) && (
            <button
              type="submit"
              className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-red-500 px-4 py-2.5 text-sm text-white"
              onClick={handleClear}
            >
              <span className="text-base">Clear</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
          <Select />
        </div>
      </div>
    </header>
  );
};

export default Header;
