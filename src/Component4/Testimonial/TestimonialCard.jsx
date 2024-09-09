/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,

  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className="px-4 sm:px-10 lg:px-5 xl:px-10 pt-8 pb-9 relative bg-BodyBg-0 group rounded-md z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-HeadingColor-0 before:-z-10 before:rounded-md before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 transition-all duration-500">
      <div className="flex flex-col md:items-center md:flex-row gap-5 md:gap-4 xl:gap-5 pb-8 border-b border-BorderColor2-0">
        <div>
          <img src={testiImg} draggable="false" />
        </div>
        <div className="flex-1">
          <h5 className="font-FiraSans font-semibold text-HeadingColor-0 text-2xl transition-all duration-500 group-hover:text-white">
            {testiName}
          </h5>
          <p className="font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-white">
            {testiDesignation}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-7">
        <ul className="flex items-center gap-1">
          <li className="text-white size-[18px] bg-PrimaryColor-0 flex justify-center items-center text-xs">
            {testiRatingIcon}
          </li>
          <li className="text-white size-[18px] bg-PrimaryColor-0 flex justify-center items-center text-xs">
            {testiRatingIcon}
          </li>
          <li className="text-white size-[18px] bg-PrimaryColor-0 flex justify-center items-center text-xs">
            {testiRatingIcon}
          </li>
          <li className="text-white size-[18px] bg-PrimaryColor-0 flex justify-center items-center text-xs">
            {testiRatingIcon}
          </li>
          <li className="text-white size-[18px] bg-PrimaryColor-0 flex justify-center items-center text-xs">
            {testiRatingIcon}
          </li>
        </ul>
        <p className="font-FiraSans text-[15px] text-TextColor2-0 transition-all duration-500 group-hover:text-white">
          20 July, 2024
        </p>
      </div>
      <p className="font-FiraSans text-[17px] text-TextColor2-0 transition-all duration-500 group-hover:text-white pt-8">
        {testiDesc}
      </p>
    </div>
  );
};

export default TestimonialCard;
