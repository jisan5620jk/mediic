/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogListCard = ({
  blogListImg,
  thumbContent,
  blogListTitle,
  postBy,
  comments,
  blogListDesc,
  blogListUrl,
}) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={blogListImg}
          className="w-full transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 -left-1/4 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:left-0">
          <h6 className="font-FiraSans text-white pl-7 pr-12 py-2 overflow-hidden bg-PrimaryColor-0 relative z-10 before:absolute before:-right-4 before:top-1 before:w-8 before:h-8 before:!rotate-45 before:bg-HeadingColor-0">
            {thumbContent}
          </h6>
        </div>
      </div>
      <div className="px-4 sm:px-8 ml-8 bg-white shadow-cases rounded-b-md rounded-ss-md -mt-[50px] relative z-10">
        <div className="flex items-center justify-between gap-5 pt-9 pb-7 border-b-2  relative before:absolute before:left-0 before:-bottom-[2px] before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:animate-dance4">
          <h6 className="flex items-center gap-2 font-FiraSans text-[17px] text-PrimaryColor-0 font-medium">
            {postBy}
          </h6>
          <h6 className="flex items-center font-FiraSans text-[17px] text-TextColor2-0 font-medium">
            {comments}
          </h6>
        </div>
        <Link to={blogListUrl}>
          <button className="font-FiraSans font-bold text-left text-lg sm:text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-7 mb-5">
            {blogListTitle}
          </button>
        </Link>
        <p className="font-FiraSans text-TextColor2-0 pb-9">{blogListDesc}</p>
      </div>
    </div>
  );
};

export default BlogListCard;
