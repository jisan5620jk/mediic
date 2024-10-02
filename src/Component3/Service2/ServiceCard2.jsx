/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ServiceCard2 = ({
  serviceIcon,
  serviceShape,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  btnContent,
  btnIcon,
}) => {
  return (
    <div className='relative z-10 rounded-3xl transition-all duration-500 group overflow-hidden bg-white bg-opacity-30 border-2 border-white border-opacity-60 py-[50px] px-4 sm:px-9 w-[300px] 2xl:h-[504px] 2xl:w-[190px] 2xl:hover:w-[410px] hover:border-PrimaryColor-0'>
      <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10'></span>
      <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10'></span>
      <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10'></span>
      <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10'></span>
      <div className='service-shape absolute -z-10 top-10 left-10 opacity-0 transition-all duration-500'>
        <img
          src={serviceShape}
          draggable='false'
        />
      </div>
      <div className='service-icon ml-[14px] transition-all duration-500'>
        <img
          src={serviceIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:[transform:rotateY(180deg)]'
        />
      </div>
      <div className='service-title absolute bottom-[130px] -left-2 inline-block transition-all duration-500'>
        <h4 className='w-[204px] -rotate-90 transition-all duration-500 font-AlbertSans font-bold text-[22px] text-HeadingColor-0 uppercase'>
          {serviceTitle}
        </h4>
      </div>
      <p className='service-desc font-DMSans text-white pt-[102px] pb-[52px] opacity-0 transition-all duration-500'>
        {serviceDesc}
      </p>
      <div className='service-btn opacity-0 transition-all duration-500'>
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
    </div>
  );
};

export default ServiceCard2;
