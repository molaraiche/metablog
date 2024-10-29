import Image from "next/image";

const BlogCard = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 lg:w-[396px] md:w-[396px] sm:w-[90%] xsm:w-[90%] p-4 rounded-xl border border-secondary-100 shadow-sm'>
      <div className=''>
        <Image src='/assets/card-1.png' alt='beach' width={360} height={240} />
      </div>
      <div className='flex flex-col gap-5'>
        <div className=''>
          <p className='text-[#4B6BFB] font-medium bg-tagBg w-fit py-1 px-2.5 rounded-md'>
            Technology
          </p>
          <h3 className='text-2xl font-semibold dark:text-white text-secondary-800'>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h3>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex items-center justify-center gap-3'>
            <Image
              src='/assets/Tracey_Wilson.png'
              alt='Tracey_Wilson'
              width={36}
              height={36}
            />
            <p className='text-secondary-400'>Tracey Wilson</p>
          </div>
          <div className=''>
            <p className='text-secondary-400'>August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
