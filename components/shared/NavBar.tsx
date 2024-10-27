import Image from "next/image";
import Link from "next/link";
import Search from "../Search";
import Mode from "../Mode";

const NavBar = () => {
  return (
    <header className='flex items-center justify-between h-9 py-8'>
      <div className=''>
        <Image
          src='./assets/logo.svg'
          alt='MetaBlog Logo'
          width={158}
          height={36}
        />
      </div>
      <nav className='flex gap-10'>
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
