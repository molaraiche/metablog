"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const BlogPost = () => {
  const searchParams = useSearchParams();

  const { title, tag, author, date, profile, mainImage, context } =
    Object.fromEntries(searchParams.entries());

  return (
    <section className='flex flex-col container mx-auto max-w-[800px] w-full py-5'>
      <div className=''>
        <p className='text-white font-medium bg-[#4B6BFB] flex items-center justify-center w-fit py-1 px-2.5 rounded-md'>
          {tag}
        </p>
        <h1 className='text-4xl text-secondary-900 dark:text-white font-semibold mt-4 w-full'>
          {title}
        </h1>
        <div className='flex items-center mt-5 gap-6 text-secondary-600'>
          <div className='flex items-center gap-2'>
            <Image src={profile} alt={author} width={28} height={28} />
            <p> {author} </p>
          </div>
          <div className=''>{date}</div>
        </div>
      </div>
      <div className='my-8'>
        <Image src={mainImage} alt={title} width={800} height={462} />
      </div>
      <p className='text-xl text-secondary-600 font-jakarta prose dark:prose-invert'>
        {" "}
        {context}{" "}
      </p>
    </section>
  );
};

export default BlogPost;
