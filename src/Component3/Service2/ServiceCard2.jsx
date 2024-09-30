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
    <div className='service-box relative z-10 rounded-3xl transition-all duration-500 group overflow-hidden bg-PrimaryColor-0 py-[50px] px-9 2xl:h-[504px] 2xl:w-[190px] 2xl:hover:w-[410px]'>
      <div className='absolute -z-10 top-10 left-10'>
        <img
          src={serviceShape}
          draggable='false'
        />
      </div>
      <div className='service-icon ml-[14px] transition-all duration-500 group-hover:ml-0'>
        <img
          src={serviceIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:[transform:rotateY(180deg)]'
        />
      </div>
      <div className='service-title absolute bottom-[130px] -left-2 inline-block transition-all duration-500 group-hover:left-9 group-hover:bottom-[278px]'>
        <h4 className='w-[204px] -rotate-90 transition-all duration-500 group-hover:-rotate-0 font-AlbertSans font-bold text-[22px] text-white uppercase'>
          {serviceTitle}
        </h4>
      </div>
      <p className='service-desc font-DMSans text-white pt-[102px] pb-[52px] opacity-0 transition-all duration-500 group-hover:opacity-100'>
        {serviceDesc}
      </p>
      <div className='service-btn opacity-0 transition-all duration-500 group-hover:opacity-100'>
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
