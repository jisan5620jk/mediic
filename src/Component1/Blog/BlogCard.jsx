/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogCard = ({
  blogThumb,
  blogDateIcon,
  blogDate,
  blogPostBy,
  blogUrl,
  blogTitle,
  blogPostByIcon,
}) => {
  return (
    <div className='group transition-all duration-500 rounded-lg bg-transparent'>
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
      <div className='rounded-b-lg relative z-20 flex justify-center transition-all duration-500 2xl:pr-14 pt-9'>
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
            <button className='font-AlbertSans text-left font-semibold text-xl sm:text-[22px] md:text-[22px] lg:text-xl xl:text-[23px] 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-2'>
              {blogTitle}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
