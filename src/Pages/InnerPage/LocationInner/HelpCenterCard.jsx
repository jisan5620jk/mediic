/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HelpCenterCard = ({
  helpCenterImg,
  helpCenterIcon,
  helpCenterTitle,
  helpCenterDesc,
  helpCenterUrl,
  helpCenterBtn,
}) => {
  return (
    <div className="text-center relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[80%] before:bg-white before:rounded-md before:-z-10 pb-[40px]">
      <div className="inline-block relative z-10 before:absolute before:-z-10 before:left-0 before:-top-2 before:w-full before:h-full before:border before:border-dashed before:border-[#aeb2b5] before:rounded-full before:animate-rotate">
        <img src={helpCenterImg} draggable="false" className="m-auto" />
      </div>
      <h5 className="font-FiraSans font-semibold text-[26px] text-HeadingColor-0 mt-5 mb-[10px]">
        {helpCenterTitle}
      </h5>
      <p className="font-FiraSans text-TextColor2-0 mb-8">{helpCenterDesc}</p>
      <div className="mx-8 relative z-10 before:absolute before:top-1/2 before:left-0 before:w-1/3 before:h-[1px] before:-translate-y-1/2 before:bg-[linear-gradient(90deg,_rgba(12,89,219,1)_30%,_rgba(255,255,255,0)_100%)] after:absolute after:top-1/2 after:right-0 after:w-1/3 after:h-[1px] after:-translate-y-1/2 after:bg-[linear-gradient(-90deg,_rgba(12,89,219,1)_30%,_rgba(255,255,255,0)_100%)] mb-11">
        <img src={helpCenterIcon} draggable="false" className="m-auto" />
      </div>
      <div className="mx-12">
        <Link to={helpCenterUrl}>
          <button className="font-FiraSans flex justify-center items-center w-full font-medium py-3 border rounded-full transition-all duration-500 hover:text-white border-BorderColor2-0 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-full before:scale-0 before:rounded-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:scale-100">
            {helpCenterBtn}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HelpCenterCard;
