"use client";
import { useState } from "react";
import Blogs from "@/components/Blogs";
import Filter from "@/components/Filter";
import { blogs as initialBlogs } from "@/constants/blogs";
import { blogPostType } from "@/types/type";

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] =
    useState<blogPostType[]>(initialBlogs);

  const handleFilterChange = (tag: string) => {
    setSelectedTag(tag);
    if (tag) {
      setFilteredBlogs(initialBlogs.filter((blog) => blog.tag === tag));
    } else {
      setFilteredBlogs(initialBlogs);
    }
  };

  return (
    <section className=''>
      <div className='w-full flex justify-between my-4'>
        <p className='text-white font-medium bg-[#4B6BFB] flex items-center justify-center w-fit py-1 px-2.5 rounded-md'>
          {selectedTag || "All Blogs"}
        </p>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <Blogs blogs={filteredBlogs} />
    </section>
  );
};

export default BlogPage;
