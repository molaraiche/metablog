"use client";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const searchToggleHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchToggle(!searchToggle);
  };
  return (
    <form className=' dark:bg-[#242535] dark:border-[#242535] flex items-center justify-center border-2 rounded-[5px] bg-secondary-100 p-2'>
      <input
        type='search'
        placeholder='Search in Blogs.'
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Escape") {
            setSearchToggle(!searchToggle);
          }
        }}
        className={`bg-secondary-100 dark:bg-[#242535] dark:text-white  outline-none ease-in duration-300 ${
          searchToggle ? "w-[166px]" : "w-0"
        }`}
      />
      <button className='text-center' onClick={searchToggleHandler}>
        <MdSearch className='outline-none dark:text-secondary-600' />
      </button>
    </form>
  );
};

export default Search;
