"use client";
import Link from "next/link";
import Mode from "../Mode";
import Logo from "./Logo";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useCallback, useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = useCallback(() => {
    setMenu((prevMenu) => !prevMenu);
  }, []);
  const linkHandler: React.MouseEventHandler<HTMLAnchorElement> =
    useCallback(() => {
      setMenu(false);
    }, []);
  return (
    <header className='flex items-center justify-between h-[10vh] py-8 '>
      <Logo linkHandler={linkHandler} />
      <nav
        className={`nav
      ${menu ? "sm:translate-x-0 xsm:translate-x-[0%]" : "-translate-x-[200%]"} 
      `}>
        <Link href='/' onClick={linkHandler}>
          Home
        </Link>
        <Link href='/blogs' onClick={linkHandler}>
          Blogs
        </Link>
        <Link href='/contact' onClick={linkHandler}>
          Contact
        </Link>
      </nav>
      <div
        className={`utils
      ${menu ? "sm:translate-x-0 xsm:translate-x-[0%]" : "-translate-x-[200%]"} 
        `}>
        <Mode />
        <Link
          href='/sign-up'
          className='dark:text-white text-secondary-900 hover:text-[#4B6BFB] dark:hover:text-[#4B6BFB] font-semibold'>
          Sign up
        </Link>
      </div>
      <div className='lg:hidden md:hidden sm:flex xsm:flex'>
        {menu ? (
          <span>
            <IoMdClose
              className='dark:text-white text-secondary-900 w-8 h-8'
              onClick={menuHandler}
            />
          </span>
        ) : (
          <span>
            <RiMenu2Line
              className='dark:text-white text-secondary-900 w-8 h-8'
              onClick={menuHandler}
            />
          </span>
        )}
      </div>
    </header>
  );
};

export default NavBar;
