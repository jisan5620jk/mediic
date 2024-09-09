/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureUrl,
  featureIcon,
  featureTitle,
  featureDesc,
  featureNumber,
}) => {
  return (
    <div className="group rounded-2xl pt-8 px-6 lg:px-3 xl:px-6 bg-[url(/images/feature_shape.png)] transition-all duration-500 bg-cover bg-repeat-round relative z-10 hover:bg-[url(/images/feature_itm.png)] hover:bg-[inherit] pb-16">
      <div className="relative pt-[6px] z-10">
        <img src={featureIcon} draggable="false" />
      </div>
      <Link to={featureUrl}>
        <button className="font-FiraSans text-left font-medium text-xl lg:text-lg xl:text-xl pb-[10px] text-HeadingColor-0 mt-6">
          {featureTitle}
        </button>
      </Link>
      <p className="font-FiraSans text-TextColor-0 pb-2 mt-3">{featureDesc}</p>
      <h6 className="relative before:absolute before:top-12 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 after:absolute after:top-12 after:left-1/2 after:-translate-x-1/2 after:w-[1px] after:h-0 after:rounded-full after:bg-PrimaryColor-0 after:transition-all after:duration-500 group-hover:before:scale-100 group-hover:after:h-7 font-FiraSans text-[17px] text-PrimaryColor-0">
        <span className="absolute left-1/2 -translate-x-1/2 top-12 transition-all duration-500 group-hover:top-[74px]">
          {featureNumber}
        </span>
      </h6>
    </div>
  );
};

export default FeatureCard;
