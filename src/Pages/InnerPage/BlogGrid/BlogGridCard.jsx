/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogGridCard = ({
  blogGridImg,
  thumbContent,
  blogGridTitle,
  postBy,
  comments,
  blogGridDesc,
  blogGridUrl,
  thumbBtn,
}) => {
  return (
    <div className="group bg-BodyBg-0 p-5 rounded-md">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={blogGridImg}
          className="w-full transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0">
          <h6 className="font-FiraSans text-white pl-7 pr-12 py-2 overflow-hidden bg-PrimaryColor-0 relative z-10 before:absolute before:-right-4 before:top-1 before:w-8 before:h-8 before:!rotate-45 before:bg-HeadingColor-0">
            {thumbContent}
          </h6>
        </div>
        <div className="absolute bottom-4 -right-1/4 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:right-6">
          <Link to={blogGridUrl}>
            <button className="font-FiraSans text-white size-11 rounded-full border-2 text-2xl flex justify-center items-center border-white bg-PrimaryColor-0">
              {thumbBtn}
            </button>
          </Link>
        </div>
      </div>
      <div className="sm:px-5 relative z-10">
        <div className="flex items-center justify-between gap-5 pt-7 pb-7 border-b-2  relative before:absolute before:left-0 before:-bottom-[2px] before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:animate-dance5">
          <h6 className="flex items-center gap-2 font-FiraSans text-[17px] text-PrimaryColor-0 font-medium">
            {postBy}
          </h6>
          <h6 className="flex items-center font-FiraSans text-[17px] text-TextColor2-0 font-medium">
            {comments}
          </h6>
        </div>
        <Link to={blogGridUrl}>
          <button className="font-FiraSans font-semibold text-left text-lg sm:text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-7 mb-3">
            {blogGridTitle}
          </button>
        </Link>
        <p className="font-FiraSans text-TextColor2-0 pb-4">{blogGridDesc}</p>
      </div>
    </div>
  );
};

export default BlogGridCard;
