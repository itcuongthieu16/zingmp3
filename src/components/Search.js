import React from "react";
import icons from "../untils/icons";

const { CiSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex items-center">
      <span className="h-10 bg-[#dde4e4] pl-4 flex items-center justify-center rounded-l-[20px] text-gray-500">
        <CiSearch size={23} />
      </span>
      <input
        type="text"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        className="outline-none bg-[#dde4e4] pl-2 py-2 rounded-r-[20px] h-10 w-full text-gray-700 placeholder:text-gray-500 placeholder:text-[14px]"
      />
    </div>
  );
};

export default Search;
