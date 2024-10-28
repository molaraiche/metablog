import Link from "next/link";
import Search from "../Search";
import Mode from "../Mode";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className='flex items-center justify-between h-9 py-8'>
      <Logo />
      <nav className='flex gap-10 dark:text-white text-[#3B3C4A]'>
        <Link href='/'>Home</Link>
        <Link href='/blogs'>Blogs</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
      <div className='flex gap-10 items-center'>
        <Search />
        <Mode />
      </div>
    </header>
  );
};

export default NavBar;
