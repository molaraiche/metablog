const Loader = () => {
  return (
    <div className='w-full flex flex-wrap justify-center items-center max-w-sm p-4 mx-auto space-y-4'>
      <div className='h-6 w-3/4 bg-slate-800 dark:bg-slate-200 rounded animate-pulse'></div>
      <div className='h-4 w-full bg-slate-800 dark:bg-slate-200 rounded animate-pulse'></div>
      <div className='h-4 w-5/6 bg-slate-800 dark:bg-slate-200 rounded animate-pulse'></div>
      <div className='h-48 w-full bg-slate-800 dark:bg-slate-200 rounded animate-pulse'></div>
    </div>
  );
};

export default Loader;
