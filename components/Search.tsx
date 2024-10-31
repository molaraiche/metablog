import { MdSearch } from "react-icons/md";

interface SearchProps {
  linkHandler?: React.MouseEventHandler;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ linkHandler, onSearchChange }) => {
  return (
    <form className='w-[30%] dark:bg-[#242535] dark:border-[#242535] flex items-center justify-center border-2 rounded-[5px] bg-secondary-100 p-2'>
      <input
        type='search'
        placeholder='Search in Blogs.'
        className='bg-secondary-100 dark:bg-[#242535] dark:text-white outline-none ease-in duration-300'
        onChange={onSearchChange} // Trigger onSearchChange if provided
      />
      <button type='button' className='text-center' onClick={linkHandler}>
        <MdSearch className='outline-none dark:text-secondary-600' />
      </button>
    </form>
  );
};

export default Search;
