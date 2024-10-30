import Blogs from "@/components/Blogs";
import { blogs } from "@/constants/blogs";
import Image from "next/image";

const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-[10rem]'>
      <section className='flex flex-col items-center justify-center relative lg:gap-0 md:gap-0 sm:gap-3 xsm:gap-3 py-20'>
        <div className=''>
          <Image
            src='/assets/hero.jpg'
            width={1216}
            height={600}
            alt='Hero'
            className='rounded-xl max-w-[1216px] w-full object-cover'
          />
        </div>
        <div className='max-w-[600px] lg:w-[60%] md:w-[60%] sm:w-full sm:max-w-full xsm:max-w-full xsm:w-full p-10 rounded-xl bg-secondary-100 dark:bg-secondary-900 dark:text-secondary-100 lg:absolute md:absolute lg:-bottom-20 lg:left-40 md:left-20 md:-bottom-10 flex flex-col gap-6'>
          <h1 className='text-secondary-900 dark:text-secondary-100 font-semibold text-4xl'>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/person.png'
              alt='Jason Francisco'
              width={36}
              height={36}
            />
            <div className='flex items-center gap-5'>
              <span>Jason Francisco</span>
              <span>August 20, 2022</span>
            </div>
          </div>
        </div>
      </section>

      <section className='dark:text-white text-secondary-900 py-20 flex flex-col items-center justify-center gap-8 w-full'>
        <h1 className='text-2xl font-bold w-full flex items-center justify-start'>
          Latest Posts
        </h1>
        <Blogs blogs={blogs} />
      </section>
    </section>
  );
};

export default Home;
