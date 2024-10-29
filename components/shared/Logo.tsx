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
    <Link href='/' onClick={linkHandler}>
      <Image
        src={lightLogoPath}
        alt='MetaBlog Logo'
        width={158}
        height={36}
        priority={true}
        className='block dark:hidden'
      />
      <Image
        src={darkLogoPath}
        alt='MetaBlog Dark Logo'
        width={158}
        height={36}
        priority={true}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
