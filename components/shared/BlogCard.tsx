import Image from "next/image";
import { blogPostType } from "@/types/type";
import Link from "next/link";

const BlogCard: React.FC<blogPostType> = ({
  title,
  tag,
  author,
  date,
  thumbnail,
  profile,
  mainImage,
  context,
}) => {
  return (
    <Link
      href={{
        pathname: `/blogs/${title}`,
        query: {
          title: title,
          tag: tag,
          author: author,
          date: date,
          profile: profile,
          mainImage: mainImage,
          context: context,
        },
      }}
      className='flex flex-col items-center justify-center gap-4 lg:w-[396px] md:w-[396px] sm:w-[90%] xsm:w-[90%] p-4 rounded-xl border border-secondary-100 shadow-sm'>
      <div className='w-[360px] h-[240px] overflow-hidden'>
        <Image
          src={thumbnail}
          alt={title}
          width={360}
          height={240}
          className='object-cover'
          layout='fixed'
        />
      </div>

      <div className='flex flex-col gap-5'>
        <div className=''>
          <p className='text-[#4B6BFB] font-medium bg-tagBg w-fit py-1 px-2.5 rounded-md'>
            {tag}
          </p>
          <h3 className='text-2xl font-semibold dark:text-white text-secondary-800'>
            {title}
          </h3>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex items-center justify-center gap-3'>
            <Image
              src={profile}
              alt={author}
              width={36}
              height={36}
              className='rounded-full'
            />
            <p className='text-secondary-400'>{author}</p>
          </div>
          <div className=''>
            <p className='text-secondary-400'>{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
