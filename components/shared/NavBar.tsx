"use client";
import Link from "next/link";
import Search from "../Search";
import Mode from "../Mode";
import Logo from "./Logo";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useCallback, useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  const menuHandler = useCallback(() => {
    setMenu((prevMenu) => !prevMenu);
    console.log(menu);
  }, [menu]);
  const linkHandler: React.MouseEventHandler<HTMLAnchorElement> =
    useCallback(() => {
      setMenu(false);
    }, []);
  return (
    <header className='flex items-center justify-between h-[10vh] py-8 '>
      <Logo linkHandler={linkHandler} />
      <nav
        className={`flex gap-10 items-center justify-center dark:text-white
      text-[#3B3C4A] font-medium lg:bg-opacity-0 md:bg-opacity-0 bg-secondary-400
      lg:static md:static sm:absolute xsm:absolute top-[10vh] lg:flew-row md:flex-row flex-col xsm:flex-col lg:w-fit md:w-fit w-full right-0 lg:py-0 md:py-0 py-5 lg:h-fit md:h-fit h-[40vh] ease-in duration-300 lg:translate-x-0 md:translate-x-0
      ${
        menu
          ? "sm:translate-x-0 xsm:translate-x-[0%]"
          : "sm:-translate-x-[200%] xsm:lg:translate-x-0 md:-translate-x-[200%]"
      } 
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
        className={`flex gap-10 items-center justify-center lg:static md:static sm:absolute xsm:absolute top-[48vh] lg:bg-opacity-0 bg-secondary-400 md:bg-opacity-0 lg:w-fit md:w-fit w-full xsm:w-full right-0 lg:py-0 md:py-0 py-5
          ease-in duration-300 lg:translate-x-0 md:translate-x-0
      ${
        menu
          ? "sm:translate-x-0 xsm:translate-x-[0%]"
          : "sm:-translate-x-[200%] xsm:lg:translate-x-0 md:-translate-x-[200%]"
      } 
        `}>
        <Search linkHandler={linkHandler} />
        <Mode />
      </div>
      <div className='lg:hidden md:hidden sm:flex xsm:flex'>
        {menu ? (
          <IoMdClose
            className='dark:text-white text-secondary-900 w-8 h-8'
            onClick={menuHandler}
          />
        ) : (
          <RiMenu2Line
            className='dark:text-white text-secondary-900 w-8 h-8'
            onClick={menuHandler}
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;
