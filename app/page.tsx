import Image from "next/image";

const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center relative'>
      <div className=''>
        <Image
          src='/assets/hero.jpg'
          width={1216}
          height={600}
          alt='Hero'
          className='rounded-xl'
        />
      </div>
      <div className='w-[600px] p-10 rounded-xl bg-secondary-100 dark:bg-secondary-900 dark:text-secondary-100 absolute -bottom-20 left-40 flex flex-col gap-6'>
        <h1 className='text-secondary-900  dark:text-secondary-100 font-semibold text-4xl '>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className='flex items-center gap-3'>
          <Image
            src='/assets/person.png'
            alt='Jason Francisco'
            width={36}
            height={36}
          />
          <div className='flex items-center gap-5'>
            <span>Jason Francisco</span>
            <span>August 20,2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
