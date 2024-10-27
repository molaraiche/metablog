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
    <form
      onClick={searchToggleHandler}
      className=' flex items-center justify-center border-2 rounded-[5px] bg-secondary-100 p-2'>
      <input
        type='search'
        placeholder='Search in Blogs.'
        className={`bg-secondary-100 outline-none ease-in h-9   duration-300 ${
          searchToggle ? "w-[166px]" : "w-0"
        }`}
      />
      <button className='text-center'>
        <MdSearch className='outline-none w-4 h-4' />
      </button>
    </form>
  );
};

export default Search;
