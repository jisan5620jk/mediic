/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceIcon2,
  serviceButton,
  serviceUrl,
  serviceTitle,
  serviceDesc,
}) => {
  return (
    <div className='rounded-xl bg-white bg-opacity-20 border-2 border-white border-opacity-75 group relative z-10 pt-10 px-4 sm:px-9 md:px-6 lg:px-4 xl:px-9 pb-9'>
      <div className='flex items-center gap-5'>
        <div className='size-[72px] rounded-full bg-white bg-opacity-20 border-2 border-white border-opacity-75 relative overflow-hidden'>
          <img
            src={serviceIcon}
            draggable='false'
            className='absolute translate-y-0 top-full left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:-translate-y-1/2 group-hover:top-1/2'
          />
          <img
            src={serviceIcon2}
            draggable='false'
            className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:-top-1/3'
          />
        </div>
        <div className='flex-1 inline-block'>
          <Link to={serviceUrl}>
            <button className='font-AlbertSans font-bold text-left text-HeadingColor-0 text-[19px] sm:text-2xl md:text-xl lg:text-lg xl:text-[21px] 2xl:text-2xl transition-all duration-500 group-hover:text-PrimaryColor-0'>
              {serviceTitle}
            </button>
          </Link>
        </div>
      </div>
      <p className='font-AlbertSans text-TextColor2-0 pt-6 pb-7 mb-7 border-b-2 border-white border-opacity-75'>
        {serviceDesc}
      </p>
      <Link to={serviceUrl}>
        <button className='font-AlbertSans text-TextColor2-0 font-medium uppercase transition-all duration-500 group-hover:text-PrimaryColor-0 relative z-10 before:absolute before:left-0 before:bottom-0 before:-z-10 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:w-full'>
          {serviceButton}
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
