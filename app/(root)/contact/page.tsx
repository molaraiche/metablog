const Contact = () => {
  return (
    <section className='text-secondary-900 dark:text-white my-6'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl font-semibold'>Contact</h1>
        <p className='font-jakarta text-secondary-800 text-center'>
          Don&apos;t Hesitate to contact us for anythig you need expalnation
          about or get help from our support
        </p>
      </div>
      <form className='flex flex-col gap-4 items-center justify-center w-full h-[40vh] my-3'>
        <div className=' flex items-center lg:w-[40%] md:w-[40%] w-full'>
          <input
            type='email'
            name='name'
            placeholder='Your Email'
            className='w-full pl-4 pr-12 py-3 dark:bg-[#181A2A] border border-[#3B3C4A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='relative flex items-center lg:w-[40%] md:w-[40%] w-full'>
          <textarea
            name='message'
            cols={5}
            rows={5}
            placeholder='Your Message'
            className='w-full pl-4 pr-12 py-3 dark:bg-[#181A2A] border border-[#3B3C4A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
          />
        </div>

        <div className=' flex justify-center items-center'>
          <button className='w-[200px] px-2 py-3 rounded-md  bg-[#4B6BFB] outline-none '>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
