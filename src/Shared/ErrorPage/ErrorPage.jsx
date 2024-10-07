import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='h-screen w-full flex flex-col justify-center items-center bg-HeadingColor-0'>
      <h1 className='text-8xl sm:text-9xl font-extrabold text-white tracking-widest'>
        404
      </h1>
      <div className='bg-PrimaryColor-0 px-2 text-white text-sm rounded rotate-12 absolute'>
        Page Not Found
      </div>
      <div className='mt-5'>
        <Link to='/'>
          <button className='relative inline-block text-sm font-medium text-PrimaryColor-0 group active:text-PrimaryColor-0 focus:outline-none focus:ring'>
            <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-PrimaryColor-0 group-hover:translate-y-0 group-hover:translate-x-0'></span>
            <span className='relative block px-8 py-3 bg-HeadingColor-0 border border-current'>
              Back To Home
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
