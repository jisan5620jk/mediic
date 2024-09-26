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
    <div className='relative z-10 rounded-3xl transition-all duration-500 overflow-hidden group bg-PrimaryColor-0 py-[50px] px-9 2xl:h-[504px] 2xl:w-[190px] 2xl:hover:w-[410px]'>
      <div className='absolute -z-10 top-10 left-10'>
        <img
          src={serviceShape}
          draggable='false'
        />
      </div>
      <div className='mb-1'>
        <img
          src={serviceIcon}
          draggable='false'
          className='mx-auto transition-all duration-500 group-hover:[transform:rotateY(180deg)]'
        />
      </div>
      <div className='absolute bottom-[130px] -left-[24px] inline-block'>
        <h4 className='w-full -rotate-90 font-AlbertSans font-bold text-[22px] text-white pt-12 uppercase'>
          {serviceTitle}
        </h4>
      </div>
      <p className='font-DMSans text-white pt-4 pb-[52px] hidden'>
        {serviceDesc}
      </p>
      <div className='hidden'>
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
