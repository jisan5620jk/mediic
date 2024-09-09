/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureUrl,
  featureDesc,
  featureBtnIcon,
}) => {
  return (
    <div className="rounded-md bg-white pl-10 sm:pl-20 lg:pl-10 xl:pl-20 sm:ml-10 lg:ml-0 group relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-HeadingColor-0 before:transition-all before:duration-500 before:rounded-md hover:before:w-full hover:before:left-0 mb-6 lg:mb-0">
      <div className="pt-8 sm:pt-0 sm:absolute sm:-left-[43px] sm:top-1/2 sm:-translate-y-1/2 lg:pt-8 lg:relative lg:-left-0 lg:top-0 lg:-translate-y-0 xl:pt-0 xl:absolute xl:-left-[43px] xl:top-1/2 xl:-translate-y-1/2">
        <div className="size-[86px] rounded-full bg-PrimaryColor-0 relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-[12px] before:left-[12px] before:size-[62px] before:border before:border-dashed before:border-white before:rounded-full before:animate-rotational">
          <img src={featureIcon} draggable="false" />
        </div>
      </div>
      <div className="overflow-hidden relative">
        <h5 className="font-FiraSans font-semibold text-HeadingColor-0 text-xl sm:text-[22px] lg:text-lg xl:text-[22px] transition-all duration-500 group-hover:text-white pt-9 pb-3">
          {featureTitle}
        </h5>
        <p className="font-FiraSans text-TextColor2-0 mb-8 transition-all duration-500 group-hover:text-TextColor-0">
          {featureDesc}
        </p>
        <Link
          to={featureUrl}
          className="absolute -bottom-14 -right-14 transition-all duration-500 group-hover:bottom-0 group-hover:right-0"
        >
          <button className="font-FiraSans rounded-ss-md font-medium bg-PrimaryColor-0 text-white flex items-center justify-center transition-all duration-500 size-10 gap-2 overflow-hidden">
            <span>{featureBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
