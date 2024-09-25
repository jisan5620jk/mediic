/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const PortfolioCard = ({
  portfolioThumb,
  portfolioShape,
  portfolioTitle,
  portfolioUrl,
  btnIcon,
}) => {
  return (
    <div className='relative z-10 rounded-3xl overflow-hidden group'>
      <span className='absolute bg-PrimaryColor-0 bg-opacity-75 left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:w-[25%] group-hover:left-0'></span>
      <span className='absolute bg-PrimaryColor-0 bg-opacity-75 left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
      <span className='absolute bg-PrimaryColor-0 bg-opacity-75 left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
      <span className='absolute bg-PrimaryColor-0 bg-opacity-75 left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
      <img
        src={portfolioThumb}
        draggable='false'
        className='rounded-3xl overflow-hidden'
      />
      <div className='absolute top-1/2 left-[47px] z-20 -translate-y-1/2 mx-auto'>
        <div className='relative z-10 text-center bg-PrimaryColor-0 border border-white border-opacity-15 rounded-lg pt-10 pb-8 px-11'>
          <div className='absolute z-10 -right-[1px] -top-[1px] text-Secondarycolor-0'>
            {portfolioShape}
          </div>
          <div className='inline-block'>
            <Link to={portfolioUrl}>
              <button className='size-[70px] rounded-full flex items-center justify-center m-auto border border-white text-white text-3xl border-opacity-20 bg-white bg-opacity-10 -rotate-45'>
                {btnIcon}
              </button>
            </Link>
          </div>
          <h4 className='font-AlbertSans font-bold text-[22px] text-white pt-12 uppercase '>
            {portfolioTitle}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
