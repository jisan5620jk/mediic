/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceSubTilte,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  btnContent,
  btnIcon,
  serviceThumb,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center rounded-lg bg-white group lg:pr-5 xl:pr-0 relative z-10 overflow-hidden">
      <div className="pl-10 py-7 sm:py-0 lg:py-5 xl:py-0">
        <div className="relative pt-[6px] z-10">
          <img src={serviceIcon} draggable="false" />
        </div>
        <h6 className="font-FiraSans text-[15px] text-PrimaryColor-0 inline-block pb-1 uppercase mt-8 relative before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-6 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full">
          {serviceSubTilte}
        </h6>
        <br />
        <Link to={serviceUrl}>
          <button className="font-FiraSans font-semibold text-xl pb-[10px] text-HeadingColor-0 mt-4">
            {serviceTitle}
          </button>
        </Link>
        <p className="font-FiraSans text-TextColor2-0 pb-2 mt-2 xl:w-10/12">
          {serviceDesc}
        </p>
        <Link to={serviceUrl} className="inline-block">
          <button className="font-FiraSans font-semibold overflow-hidden flex gap-2 items-center text-[15px] pb-[10px] text-PrimaryColor-0 mt-4 transition-all duration-500 group-hover:mt-[28px]">
            <span className="-ml-[98px] transition-all duration-500 group-hover:ml-0">
              {btnContent}
            </span>
            <span className="text-4xl text-PrimaryColor-0 transition-all duration-500 inline-block group-hover:rotate-45 group-hover:text-xl">
              {btnIcon}
            </span>
          </button>
        </Link>
      </div>
      <div>
        <img src={serviceThumb} draggable="false" />
      </div>
    </div>
  );
};

export default ServiceCard;
