/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({
  blogThumb,
  blogDateIcon,
  blogDate,
  blogTagIcon,
  blogTag,
  blogUrl,
  blogTitle,
  blogBtn,
  blogBtnIcon,
}) => {
  return (
    <div className="group p-5 transition-all duration-500 bg-white rounded-md border border-BorderColor2-0">
      <div className="relative rounded-md overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
        <img
          src={blogThumb}
          className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
        />
      </div>
      <div className="rounded-md relative z-20 bg-white transition-all duration-500 pt-8">
        <div>
          <p className="font-FiraSans text-TextColor2-0 flex gap-2 items-center leading-[15px] mb-2">
            <span className="text-PrimaryColor-0">{blogDateIcon}</span>
            {blogDate}
          </p>
          <Link to={blogUrl}>
            <button className="font-FiraSans text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mt-2">
              {blogTitle}
            </button>
          </Link>
          <div className="flex flex-col justify-between sm:flex-row lg:flex-col xl:flex-row gap-6 border-t border-BorderColor2-0 mt-7 pt-5">
            <p className="font-FiraSans text-TextColor2-0 flex gap-2 items-center leading-[15px]">
              <span className="text-PrimaryColor-0 text-xl">{blogTagIcon}</span>
              {blogTag}
            </p>
            <Link to={blogUrl} className="inline-block ">
              <button className="flex items-center gap-2 text-HeadingColor-0 text-lg font-FiraSans font-medium transition-all duration-500 group-hover:text-PrimaryColor-0">
                {blogBtn}
                {blogBtnIcon}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
