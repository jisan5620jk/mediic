/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogCard = ({
  blogThumb,
  blogDateIcon,
  blogDate,
  blogTagIcon,
  blogTag,
  blogUrl,
  blogTitle,
  blogDesc,
  blogBtnIcon,
}) => {
  return (
    <div className='group p-4 md:p-[30px] xl:p-5 2xl:p-[30px] transition-all duration-500 bg-white bg-opacity-30 border-2 border-white border-opacity-65 rounded-3xl flex items-center flex-col sm:flex-row gap-10 sm:gap-4 md:gap-10 xl:gap-6 2xl:gap-10'>
      <div className='relative rounded-3xl overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0'>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-100 group-hover:scale-110 w-full'
        />
      </div>
      <div className='flex-1 rounded-md relative z-2 transition-all duration-500 pt-8'>
        <div className='flex gap-7 mb-3'>
          <p className='font-AlbertSans text-TextColor2-0 flex gap-2 items-center leading-[15px] uppercase'>
            <span className='text-PrimaryColor-0'>{blogDateIcon}</span>
            {blogDate}
          </p>
          <p className='font-AlbertSans text-TextColor2-0 flex gap-2 items-center leading-[15px] uppercase'>
            <span className='text-PrimaryColor-0 text-xl'>{blogTagIcon}</span>
            {blogTag}
          </p>
        </div>
        <Link to={blogUrl}>
          <button className='font-AlbertSans text-left font-semibold text-lg sm:text-base md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mt-2 uppercase'>
            {blogTitle}
          </button>
        </Link>
        <p className='font-DMSans text-TextColor2-0 mt-6 mb-5'>{blogDesc}</p>
        <div className='flex justify-end'>
          <Link
            to={blogUrl}
            className='inline-block'
          >
            <button className='size-10 rounded-full border-2 border-white border-opacity-65 bg-white bg-opacity-30 text-2xl -rotate-45 text-PrimaryColor-0 flex justify-center items-center transition-all duration-500 hover:text-white hover:rotate-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 before:rounded-full hover:before:scale-100'>
              {blogBtnIcon}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
