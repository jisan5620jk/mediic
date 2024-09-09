/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LatestWorkCard = ({
  latestWorkThumb,
  latestWorkDesc,
  latestWorkTitle,
  latestWorkUrl,
  latestWorkBtn,
}) => {
  return (
    <div className="latest-work-box bg-PrimaryColor-0 relative z-10 overflow-hidden group rounded-xl transition-all duration-500 hover:p-5">
      <div className="latest-work-img rounded-xl relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:h-full group-hover:before:bottom-0 before:z-10 group-hover:before:opacity-0">
        <img
          src={latestWorkThumb}
          draggable={false}
          className="w-full transition-all duration-500 group-hover:saturate-0"
        />
      </div>
      <div className="latest-work-content pl-6 pt-[30px] pb-8 pr-10 lg:pr-5 xl:pr-10  absolute -bottom-full left-0 group-hover:left-5 group-hover:bottom-5 z-10 rounded-se-lg bg-PrimaryColor-0 lg:w-9/12 xl:w-[300px] transition-all duration-500">
        <Link to={latestWorkUrl}>
          <button className="font-FiraSans font-medium text-xl lg:text-lg xl:text-[22px] text-white text-left">
            {latestWorkTitle}
          </button>
        </Link>
        <p className="font-FiraSans text-[15px] text-white opacity-80 transition-all duration-500 mt-1">
          {latestWorkDesc}
        </p>
      </div>
      <Link
        to={latestWorkUrl}
        className="latest-work-btn transition-all duration-500 absolute top-[40%] opacity-0 left-0 -translate-x-1/2 group-hover:left-1/2 group-hover:opacity-100"
      >
        <button className="size-[60px] shadow-shade rounded-full text-2xl flex items-center justify-center text-PrimaryColor-0 bg-BodyBg-0">
          {latestWorkBtn}
        </button>
      </Link>
    </div>
  );
};

export default LatestWorkCard;
