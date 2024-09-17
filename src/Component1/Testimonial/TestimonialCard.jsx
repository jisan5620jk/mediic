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
    <div className='relative px-[50px] bg-[url(/images/test.png)] bg-no-repeat bg-cover bg-center border-2 border-BorderColor2-0 rounded-[30px]'>
      <h2 className='text-7xl text-white text-left pt-10'>{testiQuote}</h2>
      <ul className='flex gap-1 items-center mb-5 mt-5'>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-2xl'>{testiRatingIcon}</li>
      </ul>
      <p className='font-AlbertSans sm:text-xl lg:text-lg xl:text-xl text-white'>
        {testiDesc}
      </p>
      <div className='flex items-center gap-5 mt-12 lg:mt-8 xl:mt-44 pb-14'>
        <div>
          <img src={testiProfile} />
        </div>
        <div>
          <h5 className='font-AlbertSans font-semibold inline-block text-white text-2xl mb-1'>
            {testiName}
          </h5>
          <p className='font-DMSans text-[17px] text-TextColor-0'>
            {testiDesignation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
