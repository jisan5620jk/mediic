/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceButton,
  serviceUrl,
  serviceButton2,
  serviceTitle,
  serviceDesc,
}) => {
  return (
    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
        <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
          <img src={serviceIcon} draggable="false" />
        </div>
      </div>
      <Link to={serviceUrl}>
        <button className="font-FiraSans font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
          {serviceTitle}
        </button>
      </Link>
      <p className="font-FiraSans text-TextColor2-0 pt-2 pb-6">{serviceDesc}</p>
      <Link to={serviceUrl}>
        <button className="font-FiraSans text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
          {serviceButton2}
          {serviceButton}
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
