/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamSubTitle,
  teamTitle,
}) => {
  return (
    <div className="team-box group relative p-[30px] rounded-2xl bg-white bg-opacity-25 border-2 border-white transition-all duration-500 hover:border-PrimaryColor-0">
      <div className="team-thumb relative overflow-hidden rounded-xl after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-PrimaryColor-0 after:from-20% after:via-PrimaryColor-0 after:via-10% after:to-transparent after:w-full after:h-0 after:transition-all after:duration-500 group-hover:after:h-1/3">
        <img src={teamThumb} className="w-full xl:w-[inherit] m-auto" />
        <div className="team-icon absolute z-10 bottom-1/2 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:bottom-[34px] group-hover:opacity-100">
          <ul className="flex gap-3">
            <li>
              <Link to={"/"}>
                <button className="size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-PrimaryColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  {socialIcon}
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-PrimaryColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  {socialIcon2}
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-PrimaryColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  {socialIcon3}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative transition-all duration-500rounded-md text-center pt-8">
        <h6 className="font-AlbertSans uppercase text-HeadingColor-0 font-medium transition-all duration-500 mb-2">
          {teamSubTitle}
        </h6>
        <h4 className="font-AlbertSans font-semibold text-[28px] lg:text-2xl xl:text-[28px] text-HeadingColor-0 transition-all duration-500">
          {teamTitle}
        </h4>
      </div>
    </div>
  );
};

export default TeamCard;
