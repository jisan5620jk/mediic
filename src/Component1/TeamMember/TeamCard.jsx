/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  socialIcon4,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
        <img src={teamThumb} className="w-full xl:w-[inherit] m-auto" />
        <div className="absolute z-10 -top-1/3 -right-10 transition-all duration-500 group-hover:top-[112px]">
          <ul className="flex gap-3 -rotate-90">
            <li>
              <Link to={"/"}>
                <button className="size-10 rotate-90 flex justify-center items-center rounded-full overflow-hidden relative bg-HeadingColor-0 border border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  {socialIcon}
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="size-10 rotate-90 flex justify-center items-center rounded-full overflow-hidden relative bg-HeadingColor-0 border border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  {socialIcon2}
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="size-10 rotate-90 flex justify-center items-center rounded-full overflow-hidden relative bg-HeadingColor-0 border border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  {socialIcon3}
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="size-10 rotate-90 flex justify-center items-center rounded-full overflow-hidden relative bg-HeadingColor-0 border border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  {socialIcon4}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative transition-all duration-500rounded-md text-center pt-[22px] rounded-b-md">
        <h5 className="font-FiraSans font-semibold text-2xl text-HeadingColor-0 transition-all duration-500 pb-1">
          {teamTitle}
        </h5>
        <p className="font-FiraSans text-TextColor2-0 transition-all duration-500">
          {teamDesc}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
