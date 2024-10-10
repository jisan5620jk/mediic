/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogSidebarCard = ({
  blogThumb,
  blogDateIcon,
  blogDate,
  blogPostBy,
  blogUrl,
  blogTitle,
  blogPostByIcon,
  blogGridContent,
  blogGridIcon,
}) => {
  return (
    <div className='group transition-all duration-500 p-5 rounded-3xl bg-white bg-opacity-20 border-2 border-white border-opacity-80'>
      <div className='relative rounded-[20px] overflow-hidden'>
        <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:w-[25%] group-hover:left-0 group-hover:opacity-0'></span>
        <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:w-[25%] group-hover:left-[25%] group-hover:opacity-0'></span>
        <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:w-[25%] group-hover:left-1/2 group-hover:opacity-0'></span>
        <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:w-[25%] group-hover:left-[75%] group-hover:opacity-0'></span>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-100 group-hover:scale-110 w-full'
        />
      </div>
      <div className='rounded-b-lg relative z-20 flex justify-center transition-all duration-500 2xl:pr-14 pt-9 md:px-5 lg:px-0 xl:px-5'>
        <div>
          <div className='flex gap-6 mb-3'>
            <p className='font-DMSans text-HeadingColor-0 flex gap-2 items-center uppercase'>
              <span className='text-PrimaryColor-0 text-opacity-30 text-[10px]'>
                {blogDateIcon}
              </span>
              {blogDate}
            </p>
            <p className='font-DMSans text-HeadingColor-0 flex gap-2 items-center uppercase'>
              <span className='text-PrimaryColor-0 text-opacity-30 text-[10px]'>
                {blogPostByIcon}
              </span>
              {blogPostBy}
            </p>
          </div>
          <Link to={blogUrl}>
            <button className='font-AlbertSans text-left font-semibold text-xl sm:text-xl md:text-[20px] lg:text-lg xl:text-xl 2xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-2'>
              {blogTitle}
            </button>
          </Link>
          <div className='inline-block mt-8 mb-5'>
            <Link to={'/about'}>
              <button className='primary-btn !py-[11px] !px-8'>
                {blogGridContent}
                <span className='text-[22px] -rotate-45'>{blogGridIcon}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebarCard;
