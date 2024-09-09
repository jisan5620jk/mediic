/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  serviceBtn,
}) => {
  return (
    <div className="px-[30px] lg:px-7 xl:px-[30px] pt-9 pb-[34px] rounded-lg bg-transparent group overflow-hidden border border-BorderColor-0 transition-all duration-500 hover:border-PrimaryColor-0 relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 after:absolute after:-right-28 after:-top-28 after:h-[224px] after:w-[225px] after:bg-white after:scale-0 after:opacity-10 after:rounded-full after:transition-all after:duration-500 after:-z-10 hover:before:w-full hover:after:scale-100 hover:before:left-0">
      <div className="relative pb-8 z-10">
        <img
          src={serviceIcon}
          draggable="false"
          className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
        />
      </div>
      <Link to={serviceUrl}>
        <button className="font-FiraSans text-left font-semibold text-[22px] sm:text-2xl lg:text-xl xl:text-2xl pb-4 text-white">
          {serviceTitle}
        </button>
      </Link>
      <p className="font-FiraSans text-TextColor-0 transition-all duration-500 group-hover:text-white pb-7">
        {serviceDesc}
      </p>
      <Link to={serviceUrl}>
        <button className="header-btn !bg-[#ffffff1a] !border-none !px-7 !rounded-full uppercase font-FiraSans !flex gap-2 items-center group-hover:before:w-full group-hover:before:left-0">
          {serviceBtn}
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
