/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiQuote,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='relative px-2 sm:px-[60px] lg:px-2 xl:px-12 2xl:px-[60px] pt-[114px] pb-[110px] bg-[url(/images/review-bg.png)] bg-no-repeat bg-cover bg-center rounded-[30px]'>
      <img
        src={testiQuote}
        draggable='false'
      />
      <p className='font-DMSans sm:text-xl lg:text-lg xl:text-xl text-white pt-8'>
        {testiDesc}
      </p>
      <div className='flex items-center gap-3 mt-14'>
        <h5 className='font-AlbertSans font-semibold inline-block text-white text-[22px] mb-1'>
          {testiName}
        </h5>
        <span className='h-[1px] w-6 bg-white bg-opacity-50'></span>
        <p className='font-DMSans text-sm text-white uppercase'>
          {testiDesignation}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
