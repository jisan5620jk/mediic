/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiQuote,
  testiRatingIcon,
  testiProfile,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='relative px-2 sm:px-[50px] lg:px-2 xl:px-8 2xl:px-[50px] bg-PrimaryColor-0 bg-[url(/images/test2.png)] bg-no-repeat bg-cover bg-center rounded-[30px]'>
      <img
        src={testiQuote}
        draggable='false'
        className='pt-7 sm:pt-14'
      />
      <ul className='flex gap-1 items-center mb-5 mt-9'>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
      </ul>
      <p className='font-AlbertSans sm:text-xl lg:text-lg xl:text-xl text-white'>
        {testiDesc}
      </p>
      <div className='flex items-center gap-5 mt-12 lg:mt-[104px] 2xl:mt-[165px] pb-7 sm:pb-14'>
        <div>
          <img src={testiProfile} />
        </div>
        <div>
          <h5 className='font-AlbertSans font-semibold inline-block text-white text-2xl mb-1'>
            {testiName}
          </h5>
          <p className='font-DMSans text-[17px] lg:text-base xl:text-[17px] text-white text-opacity-60' >
            {testiDesignation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
