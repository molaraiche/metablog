import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const lightLogoPath = "/assets/logo.svg";
  const darkLogoPath = "/assets/logo-dark.svg";

  return (
    <div className='lg:w-[20%] md:w-[20%] w-fit'>
      <Link href='/' className=''>
        <div className='block dark:hidden'>
          <Image
            src={lightLogoPath}
            alt='MetaBlog Logo'
            width={158}
            height={36}
            priority={true}
          />
        </div>

        <div className='dark:block hidden'>
          <Image
            src={darkLogoPath}
            alt='MetaBlog Dark Logo'
            width={158}
            height={36}
            priority={true}
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
