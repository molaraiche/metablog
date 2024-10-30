// components/Blogs.tsx
import BlogCard from "@/components/shared/BlogCard";
import { blogPostType } from "@/types/type";

interface BlogsProps {
  blogs: blogPostType[];
}

const Blogs: React.FC<BlogsProps> = ({ blogs = [] }) => {
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <section className='flex flex-wrap gap-5 items-center lg:justify-between md:justify-between sm:justify-center xsm:justify-center'>
        <p className='text-center w-full'>No blogs available.</p>
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
