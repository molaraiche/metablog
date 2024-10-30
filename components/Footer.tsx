import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "./shared/Logo";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className='w-full py-8 bg-[#F6F6F7] dark:bg-secondary-900 text-white text-center font-jakarta'>
        <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 '>
          <div className='  flex justify-between lg:flex-row flex-col lg:gap-0 gap-5'>
            <div className='flex flex-col items-start gap-6 '>
              <div className=''>
                <p className='text-lg font-semibold text-[#181A2A] dark:text-white'>
                  About
                </p>
                <p className='text-[#696A75] text-left lg:w-[200px] w-full'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
              <div className='text-[#181A2A] flex flex-col items-start'>
                <p className='text-[#696A75]'>
                  <span className='text-[#181A2A] dark:text-white font-semibold'>
                    Email :
                  </span>
                  laraichemohamed@gmail.com
                </p>
                <p className='text-[#696A75]'>
                  <span className='text-[#181A2A] dark:text-white font-semibold'>
                    Phone :
                  </span>
                  +212663723223
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <p className='text-lg font-semibold text-[#181A2A] dark:text-white'>
                Quick Links
              </p>
              <div className='flex items-start flex-col gap-2 text-secondary-600'>
                <Link href='/'>Home</Link>
                <Link href='/blogs'>Blogs</Link>
                <Link href='/contact'>Contact</Link>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <p className='text-lg font-semibold text-[#181A2A] dark:text-white'>
                Category
              </p>
              <div className='flex items-start flex-col gap-2 text-secondary-600'>
                <Link href='#'>Lifestyle</Link>
                <Link href='#'>Technology</Link>
                <Link href='#'>Travel</Link>
              </div>
            </div>
            <div className='flex flex-col gap-[30px] bg-[#fff] dark:bg-[#3B3C4A] p-8 rounded-xl'>
              <div className='flex flex-col gap-2'>
                <p className='text-lg font-semibold text-[#181A2A] dark:text-white'>
                  Weekly Newsletter
                </p>
                <p className='text-secondary-400'>
                  Get blog articles and offers via email
                </p>
              </div>
              <form className='flex flex-col gap-2'>
                <div className='relative flex items-center w-full'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    className='w-full pl-4 pr-12 py-3 dark:bg-[#181A2A] border border-[#3B3C4A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  <div className='absolute right-4'>
                    <MdOutlineMailOutline className='w-6 h-6 text-gray-400' />
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <button className='w-full px-2 py-3 rounded-md  bg-[#4B6BFB] outline-none '>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'></div>
      </div>
      <footer className='flex items-center lg:flex-row flex-col my-4 justify-between px-4 h-[10vh] text-secondary-900 dark:text-white'>
        <Logo />
        <p>
          ©{year}
          <a
            href='https://www.molaraiche.com/'
            target='_blank'
            className='font-semibold mx-1 text-[#DD2627]'>
            molaraiche.
          </a>
          All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
