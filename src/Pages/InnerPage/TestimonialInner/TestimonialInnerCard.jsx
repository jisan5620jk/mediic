/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
  testiTitle,
  testiShape,
}) => {
  return (
    <div className="px-5 sm:px-10 lg:px-4 xl:px-10 pt-9 pb-8 bg-white relative group rounded-xl z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-HeadingColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="flex flex-col sm:flex-row gap-7 lg:gap-4 xl:gap-7">
        <div>
          <img src={testiImg} />
        </div>
        <div className="flex-1">
          <ul className="flex gap-[6px] items-center">
            <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
            <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
            <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
            <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
            <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
          </ul>
          <h5 className="font-FiraSans font-semibold text-HeadingColor-0 transition-all duration-500 group-hover:text-white text-2xl mt-2 mb-[6px]">
            {testiName}
          </h5>
          <p className="font-FiraSans text-TextColor-0 transition-all duration-500 group-hover:text-white">
            {testiDesignation}
          </p>
        </div>
      </div>
      <p className="font-FiraSans text-lg text-TextColor-0 transition-all duration-500 group-hover:text-white pt-7 pb-4">
        {testiDesc}
      </p>
      <h5 className="font-FiraSans font-medium text-lg text-PrimaryColor-0">
        {testiTitle}
      </h5>
      <div className="absolute top-10 right-8">
        <img src={testiShape} />
      </div>
    </div>
  );
};

export default TestimonialCard;
