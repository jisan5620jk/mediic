/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className="group rounded-md relative z-10 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 after:bg-gradient-to-t after:from-PrimaryColor-0 after:to-transparent hover:after:h-4/6">
      <img src={teamThumb} draggable="false" className="w-full" />
      <div className="absolute z-10 -top-1/3 -right-4 transition-all duration-500 group-hover:top-[112px]">
        <ul className="flex gap-3 -rotate-90">
          <li>
            <Link to={"/"}>
              <button className="size-10 rotate-90 flex justify-center items-center rounded-full overflow-hidden relative bg-HeadingColor-0 border-2 border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="size-10 rotate-90 flex justify-center items-center rounded-full overflow-hidden relative bg-HeadingColor-0 border-2 border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="size-10 rotate-90 flex justify-center items-center rounded-full overflow-hidden relative bg-HeadingColor-0 border-2 border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon3}
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center absolute z-20 bottom-5 left-1/2 -translate-x-1/2 w-full">
        <h5 className="font-FiraSans font-semibold text-[22px] text-white">
          {teamTitle}
        </h5>
        <p className="font-FiraSans text-TextColor-0">{teamDesc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
