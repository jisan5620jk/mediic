/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceThumb,
  serviceTitle,
  serviceUrl,
  serviceBtn,
  btnIcon,
}) => {
  return (
    <div className="relative z-10 flex justify-end group overflow-hidden rounded-t-3xl before:absolute before:top-0 before:left-0 before:w-full before:h-[290px] before:bg-Secondarycolor-0 before:rounded-2xl before:-z-20 after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:bg-PrimaryColor-0 after:rounded-2xl after:-z-10 after:transition-all after:duration-500 hover:after:h-[290px]">
      <div className="mt-5 ml-5 sm:mt-10 sm:ml-10  lg:mt-5 md:ml-5 xl:mt-10 xl:ml-10 overflow-hidden rounded-2xl">
        <div className="relative z-10 rounded-t-2xl overflow-hidden">
          <img
            src={serviceThumb}
            draggable="false"
            className="w-full transition-all duration-500 group-hover:scale-110"
          />
        </div>
        <div className="bg-Secondarycolor-0 px-5 sm:px-10 md:px-5 xl:px-10 relative z-10 before:absolute before:bottom-0 before:left-0 before:bg-[url(/images/service-content-bg.png)] before:bg-no-repeat before:bg-cover before:bg-right before:w-full before:h-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:h-full pb-5 sm:pb-9">
          <h4 className="font-FiraSans font-medium text-lg sm:text-xl 2xl:text-[23px] text-white transition-all duration-500 group-hover:text-HeadingColor-0 pt-8 mb-4">
            {serviceTitle}
          </h4>
          <Link to={serviceUrl} className="inline-block relative">
            <button className="flex items-center gap-2 font-FiraSans overflow-hidden font-medium text-sm">
              <span className="-ml-[76px] text-HeadingColor-0 transition-all duration-500 group-hover:ml-0">
                {serviceBtn}
              </span>
              <span className="text-lg text-white transition-all duration-500 group-hover:text-HeadingColor-0">
                {btnIcon}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
