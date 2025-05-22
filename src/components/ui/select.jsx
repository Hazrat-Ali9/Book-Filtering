import { useSearchParams } from "react-router-dom";
// Select
const Select = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const search = searchParams.get("search");

  return (
    <select
      className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
      name="sortBy"
      id="sortBy"
      value={sort}
      onChange={(e) => setSearchParams({ sort: e.target.value, search})}
    >
      <option value="">Sort</option>
      <option value="name_asc">Name (A-Z)</option>
      <option value="name_desc">Name (Z-A)</option>
      <option value="year_asc">Publication Year (Oldest)</option>
      <option value="year_desc">Publication Year (Newest)</option>
    </select>
  );
};

export default Select;

// Select jsx