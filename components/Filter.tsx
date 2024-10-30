import { CiFilter } from "react-icons/ci";

const Filter = () => {
  return (
    <form className='w-[30%]'>
      <div className='relative flex items-center w-full text-secondary-900 dark:text-white'>
        <select
          name='select'
          className='w-full pl-4 pr-12 py-3 dark:bg-[#181A2A] border border-[#3B3C4A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <option value='Lifestyle' className='py-3 rounded-md'>
            Lifestyle
          </option>
          <option value='Technology' className='py-3'>
            Technology
          </option>
          <option value='Travel' className='py-3'>
            Travel
          </option>
        </select>
        <div className='absolute right-4'>
          <CiFilter className='w-6 h-6 text-gray-400' />
        </div>
      </div>
    </form>
  );
};

export default Filter;
