"use client";
import { useState, useEffect } from "react";
import BlogCard from "@/components/shared/BlogCard";
import { blogPostType } from "@/types/type";
interface BlogsProps {
  blogs: blogPostType[];
}

const Blogs: React.FC<BlogsProps> = ({ blogs = [] }) => {
  const [displayedBlogs, setDisplayedBlogs] = useState<blogPostType[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisplayedBlogs(blogs.slice(0, visibleCount));
  }, [blogs, visibleCount]);

  const loadMoreBlogs = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6);
      setLoading(false);
    }, 1000);
  };

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <section className='flex flex-wrap gap-5 items-center lg:justify-between md:justify-between sm:justify-center xsm:justify-center'>
        <p className='text-center w-full'>No blogs available.</p>
      </section>
    );
  }

  return (
    <>
      <section className='flex flex-wrap gap-5 items-center lg:justify-between md:justify-between sm:justify-center xsm:justify-center my-5'>
        {displayedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            tag={blog.tag}
            author={blog.author}
            date={blog.date}
            thumbnail={blog.thumbnail}
            profile={blog.profile}
            mainImage={blog.mainImage}
            context={blog.context}
          />
        ))}
      </section>
      {visibleCount < blogs.length && (
        <div className='flex justify-center my-5'>
          <button
            onClick={loadMoreBlogs}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none'>
            {loading ? (
              <span className='inline-flex items-center'>
                <Spinner /> Loading...
              </span>
            ) : (
              "Read More"
            )}
          </button>
        </div>
      )}
    </>
  );
};

const Spinner = () => (
  <svg
    className='animate-spin h-5 w-5 mr-2 text-white'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'>
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'></path>
  </svg>
);

export default Blogs;
