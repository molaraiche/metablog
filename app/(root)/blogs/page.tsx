import Blogs from "@/components/Blogs";
import Filter from "@/components/Filter";

const BlogPage = () => {
  return (
    <section className=''>
      <div className='w-full flex justify-between my-4'>
        <p className='text-white  font-medium bg-[#4B6BFB] flex items-center justify-center w-fit py-1 px-2.5 rounded-md'>
          Technology
        </p>
        <Filter />
      </div>
      <Blogs />
    </section>
  );
};

export default BlogPage;
