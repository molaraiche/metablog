"use client";
import { useState } from "react";
import Blogs from "@/components/Blogs";
import Filter from "@/components/Filter";
import { blogs as initialBlogs } from "@/constants/blogs";
import { blogPostType } from "@/types/type";
import Search from "@/components/Search";

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] =
    useState<blogPostType[]>(initialBlogs);

  const handleFilterChange = (tag: string) => {
    setSelectedTag(tag);
    filterBlogs(tag, searchTerm);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBlogs(selectedTag, term);
  };

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    filterBlogs(selectedTag, searchTerm);
  };

  const filterBlogs = (tag: string, term: string) => {
    let updatedBlogs = initialBlogs;

    if (tag) {
      updatedBlogs = updatedBlogs.filter((blog) => blog.tag === tag);
    }
    if (term) {
      updatedBlogs = updatedBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredBlogs(updatedBlogs);
  };

  return (
    <section className=''>
      <div className='w-full flex justify-between my-4'>
        <p className='text-white font-medium bg-[#4B6BFB] flex items-center justify-center w-fit py-1 px-2.5 rounded-md'>
          {selectedTag || "All Blogs"}
        </p>
        <Search
          linkHandler={handleSearchClick}
          onSearchChange={handleSearchChange}
        />
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <Blogs blogs={filteredBlogs} />
    </section>
  );
};

export default BlogPage;
