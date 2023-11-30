import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <div className="bg-gray-light rounded-[50px] py-[10px] px-[24px] w-[140px] relative">
      <input
        type="text"
        className="bg-transparent border-none placeholder:text-gray outline-none w-[60px]"
        placeholder="Search..."
      />
      <SearchIcon className="absolute right-3 top-0 translate-y-[50%]" />
    </div>
  );
};
