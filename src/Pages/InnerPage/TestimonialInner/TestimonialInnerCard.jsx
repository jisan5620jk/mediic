/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
  testiQuote,
}) => {
  return (
    <div className='px-5 sm:px-10 lg:px-4 xl:px-10 pt-10 pb-10 bg-white bg-opacity-30 border-2 border-white rounded-3xl relative z-10 overflow-hidden'>
      <ul className='flex gap-1 items-center'>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
      </ul>
      <p className='font-AlbertSans text-base sm:text-xl text-TextColor2-0 italic pt-6 pb-12'>
        {testiDesc}
      </p>
      <div className='flex flex-col sm:flex-row gap-5 lg:gap-3 xl:gap-5'>
        <div>
          <img src={testiImg} />
        </div>
        <div className='flex-1'>
          <h5 className='font-AlbertSans font-semibold text-HeadingColor-0 text-2xl mt-2 mb-[6px]'>
            {testiName}
          </h5>
          <p className='font-AlbertSans text-TextColor2-0'>
            {testiDesignation}
          </p>
        </div>
      </div>
      <div className='absolute bottom-[60px] right-[50px]'>
        <img
          src={testiQuote}
          draggable='false'
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
