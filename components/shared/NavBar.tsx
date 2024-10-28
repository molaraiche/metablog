import Link from "next/link";
import Search from "../Search";
import Mode from "../Mode";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className='flex items-center justify-between h-[10vh] py-8 w-full '>
      <Logo />
      <nav className='flex gap-10 items-center justify-center dark:text-white text-[#3B3C4A] lg:w-[60%] md:w-[60%] w-fit font-medium'>
        <Link href='/'>Home</Link>
        <Link href='/blogs'>Blogs</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
      <div className='flex gap-10 items-center justify-center lg:w-[20%] md:w-[20%] w-fit '>
        <Search />
        <Mode />
      </div>
    </header>
  );
};

export default NavBar;
