/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({ blogNumber, blogTitle, blogThumb, blogBtn }) => {
  return (
    <div className="blog-box group rounded-md py-10 lg:mb-0 border-b border-BorderColor2-0 flex items-center gap-6 sm:gap-[55px]">
      <div>
        <h5 className="font-FiraSans font-semibold text-HeadingColor-0 text-xl size-11 rounded-full bg-white border-2 border-BorderColor2-0 flex justify-center items-center">
          {blogNumber}
        </h5>
      </div>
      <div className="relative flex justify-between items-center w-full">
        <Link to={"blogUrl"}>
          <button className="blog-title relative z-10 font-FiraSans font-semibold text-xl sm:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
            {blogTitle}
          </button>
        </Link>
        <Link to={"blogUrl"}>
          <button className="blog-btn size-[50px] rounded-full flex items-center justify-center transition-all duration-500 text-2xl text-HeadingColor-0 group-hover:border-PrimaryColor-0 group-hover:text-white bg-white border-2 border-BorderColor2-0 relative z-10 before:absolute before:top-0 before:left-0 before:size-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 before:rounded-full group-hover:before:scale-100">
            {blogBtn}
          </button>
        </Link>
        <img
          src={blogThumb}
          draggable="false"
          className="blog-thumb absolute left-0 opacity-0 -translate-x-1/2 top-0 -translate-y-1/2 transition-all duration-500 group-hover:left-3/4 group-hover:top-1/2 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default BlogCard;
