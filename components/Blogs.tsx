"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/shared/BlogCard";
import Loader from "@/components/shared/Loader";
import { blogPostType } from "@/types/type";

interface BlogsProps {
  blogs: blogPostType[];
  isLoading: boolean;
}

const Blogs: React.FC<BlogsProps> = ({ blogs = [], isLoading }) => {
  const [showSkeleton, setShowSkeleton] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (showSkeleton) {
    return (
      <section className='flex flex-wrap gap-5 items-center lg:justify-between md:justify-between sm:justify-center xsm:justify-center'>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Loader key={index} />
          ))}
      </section>
    );
  }

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <section className='flex flex-wrap gap-5 items-center lg:justify-between md:justify-between sm:justify-center xsm:justify-center min-h-[40vh]'>
        <p className='text-center w-full text-secondary-900 dark:text-white'>
          No blogs available.
        </p>
      </section>
    );
  }

  return (
    <section className='flex flex-wrap gap-5 items-center lg:justify-between md:justify-between sm:justify-center xsm:justify-center'>
      {blogs.map((blog) => (
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
  );
};

export default Blogs;
