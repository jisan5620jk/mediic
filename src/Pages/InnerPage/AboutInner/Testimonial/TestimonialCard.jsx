/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiQuote,
  testiProfile,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='relative px-2 sm:px-[50px] lg:px-2 xl:px-8 2xl:px-[50px] bg-white bg-opacity-35 border-2 border-white pt-10 pb-9 rounded-[30px]'>
      <div className='absolute top-12 right-11 hidden sm:block'>
        <img
          src={testiQuote}
          draggable='false'
        />
      </div>
      <div className='flex items-center gap-7 pb-11'>
        <div className='size-[70px] rounded-full overflow-hidden'>
          <img src={testiProfile} />
        </div>
        <div>
          <h5 className='font-AlbertSans font-bold inline-block text-HeadingColor-0 text-[22px] capitalize'>
            {testiName}
          </h5>
          <p className='font-AlbertSans text-[15px] text-TextColor2-0 uppercase'>
            {testiDesignation}
          </p>
        </div>
      </div>
      <p className='font-DMSans text-TextColor2-0 italic'>
        {testiDesc}
      </p>
    </div>
  );
};

export default TestimonialCard;
