/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className="relative text-center">
      <p className="font-FiraSans sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[75%] m-auto">
        {testiDesc}
      </p>
      <ul className="flex gap-[6px] items-center justify-center mb-7 mt-6">
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
      </ul>
      <h5 className="font-FiraSans font-semibold inline-block text-HeadingColor-0 text-2xl pt-7 mb-1 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">
        {testiName}
      </h5>
      <p className="font-FiraSans text-TextColor2-0">{testiDesignation}</p>
    </div>
  );
};

export default TestimonialCard;
