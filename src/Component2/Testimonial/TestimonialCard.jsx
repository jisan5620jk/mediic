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
    <div className="flex flex-col sm:flex-row sm:px-5 md:px-0 lg:pl-6 lg:py-6 xl:p-0 sm:items-center gap-8 bg-white rounded-xl overflow-hidden relative group z-10">
      <div className="relative z-10">
        <img
          src={testiImg}
          draggable={false}
          className="sm:w-28 md:w-full 2xl:w-[inherit]"
        />
      </div>
      <div className="flex-1 lg:flex-[inherit] xl:flex-1 rounded overflow-hidden relative z-10 pl-5 pb-5 sm:py-7 md:py-0 sm:pl-0 mr-8">
        <div className="transition-all duration-500">
          <img src={testiQuote} draggable="false" />
        </div>
        <ul className="flex gap-[2px] items-center mt-4">
          <li className="text-[#ffb609] text-[22px]">{testiRatingIcon}</li>
          <li className="text-[#ffb609] text-[22px]">{testiRatingIcon}</li>
          <li className="text-[#ffb609] text-[22px]">{testiRatingIcon}</li>
          <li className="text-[#ffb609] text-[22px]">{testiRatingIcon}</li>
          <li className="text-[#ffb609] text-[22px]">{testiRatingIcon}</li>
        </ul>
        <p className="font-FiraSans text-TextColor2-0 mt-4 text-sm sm:text-base">
          {testiDesc}
        </p>
        <h5 className="font-FiraSans font-semibold text-HeadingColor-0 text-xl mt-5 mb-2">
          {testiName}
        </h5>
        <p className="font-FiraSans text-TextColor2-0">{testiDesignation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
