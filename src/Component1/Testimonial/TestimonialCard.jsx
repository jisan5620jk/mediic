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
    <div className="relative">
      <h2 className="text-5xl text-[#e0f3e0]">{testiQuote}</h2>
      <ul className="flex gap-1 items-center mb-5 mt-5">
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
        <li className="text-[#ffb609] text-xl">{testiRatingIcon}</li>
      </ul>
      <p className="font-FiraSans font-normal sm:text-2xl lg:text-lg xl:text-2xl text-white opacity-95 italic">
        {testiDesc}
      </p>
      <div className="flex items-center gap-5 mt-12 lg:mt-8 xl:mt-12">
        <div>
          <img src={testiProfile} />
        </div>
        <div>
          <h5 className="font-FiraSans inline-block text-white text-xl mb-1">
            {testiName}
          </h5>
          <p className="font-FiraSans text-[15px] font-light text-white opacity-95">
            {testiDesignation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
