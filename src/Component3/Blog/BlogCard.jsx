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
    <div className='group p-5 transition-all duration-500 bg-white rounded-md border border-BorderColor2-0 flex items-center gap-10'>
      <div className='relative rounded-md overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0'>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-100 group-hover:scale-110 w-full'
        />
      </div>
      <div className='flex-1 rounded-md relative z-20 bg-white transition-all duration-500 pt-8'>
        <div>
          <div className='flex flex-col justify-between sm:flex-row lg:flex-col xl:flex-row gap-6 border-t border-BorderColor2-0 mt-7 mb-2 pt-5'>
            <p className='font-AlbertSans text-TextColor2-0 flex gap-2 items-center leading-[15px]'>
              <span className='text-PrimaryColor-0'>{blogDateIcon}</span>
              {blogDate}
            </p>
            <p className='font-AlbertSans text-TextColor2-0 flex gap-2 items-center leading-[15px]'>
              <span className='text-PrimaryColor-0 text-xl'>{blogTagIcon}</span>
              {blogTag}
            </p>
          </div>
          <Link to={blogUrl}>
            <button className='font-AlbertSans text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mt-2 uppercase'>
              {blogTitle}
            </button>
          </Link>
          <p className=''>{blogDesc}</p>
          <Link
            to={blogUrl}
            className='inline-block '
          >
            <button className='size-10 rounded-full border-2 border-white border-opacity-30 bg-white bg-opacity-15 flex items-center text-HeadingColor-0 text-lg font-AlbertSans font-medium transition-all duration-500 group-hover:text-PrimaryColor-0'>
              {blogBtnIcon}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
