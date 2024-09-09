/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const BreadCrumb = ({
  breadCrumbTitle,
  breadCrumbIcon,
  url,
  breadCrumbLink,
}) => {
  return (
    <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[500px] pt-20">
      <div className="Container">
        <h1 className="font-FiraSans font-bold text-4xl sm:text-[55px] text-white capitalize">
          {breadCrumbTitle}
        </h1>
        <div className="border-2 rounded border-BorderColor-0 mt-8 sm:mt-5 inline-block px-8 py-2">
          <ul className="flex flex-col md:flex-row gap-2 sm:gap-4 items-center justify-start">
            <li>
              <Link to={"/"}>
                <button className="font-FiraSans font-medium text-lg text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0">
                  <IoHome className="text-PrimaryColor-0" />
                  Home
                </button>
              </Link>
            </li>
            <li>
              <div className="text-white hidden sm:block">{breadCrumbIcon}</div>
            </li>
            <li>
              <Link to={url}>
                <button className="font-FiraSans font-medium text-lg capitalize text-white">
                  {breadCrumbLink}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
