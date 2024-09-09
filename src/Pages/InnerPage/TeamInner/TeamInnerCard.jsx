/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamInnerCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  socialIcon4,
  teamTitle,
  teamDesc,
  teamShareIcon,
}) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
        <img src={teamThumb} className="w-full xl:w-[inherit] m-auto" />
      </div>
      <div className="bg-white relative transition-all duration-500 [clip-path:polygon(0_0,_100%_0%,_100%_100%,_50%_84%,_0_100%)] rounded-md text-center pt-[22px] pb-10 rounded-b-md before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('/images/team-shape.png')] before:bg-no-repeat before:bg-cover before:-z-10 before:rounded-md group-hover:bg-PrimaryColor-0 group-hover:-mt-9">
        <h5 className="font-FiraSans font-semibold text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]">
          {teamTitle}
        </h5>
        <p className="font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-white">
          {teamDesc}
        </p>
        <ul className="flex gap-4 justify-center mb-[6px]  transition-all duration-500 group-hover:mb-7 group-hover:mt-[14px]">
          <li>
            <Link to={"/"}>
              <button className="text-base text-white transition-all duration-500 hover:text-white">
                {socialIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="text-base text-white transition-all duration-500 hover:text-white">
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="text-base text-white transition-all duration-500 hover:text-white">
                {socialIcon3}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="text-base text-white transition-all duration-500 hover:text-white">
                {socialIcon4}
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
        <button className="w-11 h-11 rounded-full transition-all duration-500 overflow-hidden bg-PrimaryColor-0 relative z-10 text-white flex justify-center items-center text-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fefefc] before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0">
          {teamShareIcon}
        </button>
      </div>
    </div>
  );
};

export default TeamInnerCard;
