/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PortfolioCard = ({
  portfolioThumb,
  portfolioSubTilte,
  portfolioTitle,
  portfolioUrl,
  portfolioBtn,
}) => {
  return (
    <div>
      <div className="portfolio-box relative z-10 group overflow-hidden">
        <div className="portfolio-box-thumb rounded-md relative overflow-hidden before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-full before:bg-HeadingColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-60">
          <img src={portfolioThumb} draggable={false} className="w-full" />
        </div>
        <div className="portfolio-box-content rounded-md overflow-hidden absolute z-10 w-11/12 left-1/2 -translate-x-1/2 -bottom-full bg-white border-PrimaryColor-0 transition-all duration-500 group-hover:bottom-5">
          <Link
            to={portfolioUrl}
            className="portfolio-btn transition-all duration-500 flex justify-center py-3"
          >
            <button className="flex items-center justify-center text-2xl text-PrimaryColor-0">
              {portfolioBtn}
            </button>
          </Link>
          <div className="bg-PrimaryColor-0 px-5 py-6">
            <Link to={portfolioUrl}>
              <button className="font-FiraSans font-semibold text-xl lg:text-lg xl:text-[26px] text-white text-left">
                {portfolioTitle}
              </button>
            </Link>
            <p className="font-FiraSans text-white mt-1">{portfolioSubTilte}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
