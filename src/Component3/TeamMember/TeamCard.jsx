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
    <div className="group relative">
      <div className="relative z-10 overflow-hidden">
        <img
          src={teamThumb}
          draggable="false"
          className="w-full -z-10 rounded-md"
        />
        <div className="text-center rounded-t-md pt-[22px] pb-[26px bg-PrimaryColor-0 w-10/12 transition-all duration-500 pb-5 absolute z-10 -bottom-[76px] opacity-0 left-1/2 -translate-x-1/2 group-hover:bottom-0 group-hover:opacity-100">
          <h5 className="font-FiraSans font-bold text-[22px] text-white">
            {teamTitle}
          </h5>
          <p className="font-FiraSans text-white">{teamDesc}</p>
        </div>
      </div>
      <ul className="flex justify-center gap-3 pt-4 pb-5 rounded-b-md bg-HeadingColor-0 w-10/12 absolute -bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:-bottom-[76px]">
        <li>
          <Link to={"/"}>
            <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full overflow-hidden relative bg-[#ffffff3f] text-white transition-all duration-500 hover:text-PrimaryColor-0 text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              {socialIcon}
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full overflow-hidden relative bg-[#ffffff3f] text-white transition-all duration-500 hover:text-PrimaryColor-0 text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              {socialIcon2}
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full overflow-hidden relative bg-[#ffffff3f] text-white transition-all duration-500 hover:text-PrimaryColor-0 text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              {socialIcon3}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
