/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ServiceCard = ({
  serviceThumb,
  serviceShape,
  serviceSubTitle,
  serviceTitle,
  serviceUrl,
  btnIcon,
}) => {
  return (
    <div className='relative z-10 rounded-3xl overflow-hidden group'>
      <div className='absolute z-20 -top-[95px] -right-[95px] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:right-0 group-hover:top-0'>
        <img
          src={serviceShape}
          draggable='false'
        />
      </div>
      <div className='absolute z-30 right-1/3 top-1/3 transition-all duration-500 opacity-0 group-hover:right-0 group-hover:top-0 group-hover:opacity-100'>
        <Link
          to={serviceUrl}
          className='inline-block relative'
        >
          <button className='size-[60px] rounded-full bg-PrimaryColor-0 flex items-center justify-center text-2xl text-white'>
            {btnIcon}
          </button>
        </Link>
      </div>
      <div className='relative z-10 rounded-t-2xl overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-Secondarycolor-0 before:from-20% before:via-Secondarycolor-0 before:via-10% before:to-transparent before:w-full before:h-1/3 before:transition-all before:z-10 before:duration-500 group-hover:before:h-0 after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-PrimaryColor-0 after:from-20% after:via-PrimaryColor-0 after:via-10% after:to-transparent after:w-full after:h-0 after:z-10 after:transition-all after:duration-500 group-hover:after:h-1/3'>
        <img
          src={serviceThumb}
          draggable='false'
          className='w-full transition-all duration-500 group-hover:scale-110'
        />
        <div className='absolute left-10 bottom-10 z-20'>
          <h6 className='font-AlbertSans font-medium text-white uppercase'>
            {serviceSubTitle}
          </h6>
          <h4 className='font-AlbertSans font-medium text-xl sm:text-2xl 2xl:text-[28px] text-white mt-1'>
            {serviceTitle}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
