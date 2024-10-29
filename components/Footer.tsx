import Link from "next/link";

const Footer = () => {
  return (
    <footer className='w-full py-8 bg-[#F6F6F7] text-white text-center font-jakarta '>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col justify-center items-start'>
            <p className='text-lg font-semibold text-[#181A2A]'>About</p>
            <p className='text-[#696A75] w-[200px] flex justify-start items-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className='text-[#181A2A]'>
              <p>
                <span className='text-[#181A2A] font-semibold'>Email :</span>{" "}
                laraichemohamed@gmail.com
              </p>
              <p>
                <span className='text-[#181A2A] font-semibold'>Phone : </span>
                +212663723223
              </p>
            </div>
          </div>
          <div className=''>
            <p className='text-lg font-semibold text-[#181A2A]'>Quick Links</p>
            <div className=''>
              <Link href='/'>Home</Link>
              <Link href='/blogs'>Blogs</Link>
              <Link href='/contact'>Contact</Link>
            </div>
          </div>
          <div className=''>
            <p className='text-lg font-semibold text-[#181A2A]'>
              Weekly Newsletter
            </p>
          </div>
        </div>
      </div>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'></div>
    </footer>
  );
};

export default Footer;
