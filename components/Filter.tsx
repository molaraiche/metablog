import { CiFilter } from "react-icons/ci";

interface FilterProps {
  onFilterChange: (selectedTag: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  return (
    <form className='w-[30%]'>
      <div className='relative flex items-center w-full text-secondary-900 dark:text-white'>
        <select
          name='select'
          className='w-full pl-4 pr-12 py-3 dark:bg-[#181A2A] border border-[#3B3C4A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => onFilterChange(e.target.value)}>
          <option value=''>All Tags</option>
          <option value='Lifestyle'>Lifestyle</option>
          <option value='Technology'>Technology</option>
          <option value='Travel'>Travel</option>
        </select>
        <div className='absolute right-4'>
          <CiFilter className='w-6 h-6 text-gray-400' />
        </div>
      </div>
    </form>
  );
};

export default Filter;
