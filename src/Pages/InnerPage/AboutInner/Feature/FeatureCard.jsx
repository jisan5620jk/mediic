/* eslint-disable react/prop-types */

const FeatureCard = ({ featureIcon, featureTitle, featureDesc }) => {
  return (
    <div className="text-center border border-BorderColor2-0 transition-all duration-500 hover:border-HeadingColor-0 overflow-hidden group px-8 lg:px-4 xl:px-8 pt-[38px] pb-8 rounded-lg bg-white relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-HeadingColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0">
      <div className="relative text-center z-10">
        <img
          src={featureIcon}
          draggable="false"
          className="m-auto transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
        />
      </div>
      <h4 className="font-FiraSans font-semibold text-2xl sm:text-[22px] lg:text-xl 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-8 mb-2">
        {featureTitle}
      </h4>
      <p className="font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-1">
        {featureDesc}
      </p>
    </div>
  );
};

export default FeatureCard;
