/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ServiceCard = ({
  serviceIcon,
  serviceShape,
  serviceSubTitle,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  btnContent,
  btnIcon,
}) => {
  return (
    <div className='relative z-10 rounded-3xl overflow-hidden group bg-PrimaryColor-0 py-8 sm:py-[50px] lg:py-8 xl:py-[50px] px-4 sm:px-9 lg:px-4 xl:px-9'>
      <div className='absolute -z-10 top-10 left-10 transition-all duration-500 group-hover:rotate-180'>
        <img
          src={serviceShape}
          draggable='false'
        />
      </div>
      <div className='size-[90px] rounded-full border border-white border-opacity-20 bg-white bg-opacity-10 flex justify-center items-center mb-1'>
        <img
          src={serviceIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:[transform:rotateY(180deg)]'
        />
      </div>
      <h6 className='absolute top-20 right-4 sm:right-9 lg:right-4 xl:right-9 font-AlbertSans font-medium text-[15px] text-white border border-white border-opacity-35 py-1 px-3 sm:px-[22px] rounded-full uppercase'>
        {serviceSubTitle}
      </h6>
      <h4 className='font-AlbertSans font-bold text-[22px] text-white pt-12 uppercase '>
        {serviceTitle}
      </h4>
      <p className='font-DMSans text-white pt-4 pb-[52px]'>{serviceDesc}</p>
      <Link
        to={serviceUrl}
        className='inline-block relative'
      >
        <button className='primary-btn3 !bg-PrimaryColor-0 !border-white !border-opacity-15'>
          {btnContent} <span className='!bg-Secondarycolor-0'></span>
          <span className='!bg-Secondarycolor-0'></span>
          <span className='!bg-Secondarycolor-0'></span>
          <span className='!bg-Secondarycolor-0'></span>
          <img
            src={btnIcon}
            draggable='false'
          />
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
