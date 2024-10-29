import Image from "next/image";
import Link from "next/link";

const Logo = ({
  linkHandler,
}: {
  linkHandler: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  const lightLogoPath = "/assets/logo.svg";
  const darkLogoPath = "/assets/logo-dark.svg";
  
  return (
    <div>
      <Link href='/' onClick={linkHandler}>
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
