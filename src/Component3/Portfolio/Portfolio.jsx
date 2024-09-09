/* eslint-disable no-unused-vars */
import { FaPlus } from "react-icons/fa6";
import portfolioThumb from "/images/portfolio4-1.jpg";
import portfolioThumb2 from "/images/portfolio4-2.jpg";
import portfolioThumb3 from "/images/portfolio4-3.jpg";
import portfolioThumb4 from "/images/portfolio4-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PortfolioCard from "./PortfolioCard";

const portfolioData = [
  {
    id: 1,
    portfolioThumb: portfolioThumb,
    portfolioSubTilte: "Design",
    portfolioTitle: "Mobile UI/UX Design",
    portfolioUrl: "/portfolio_details",
    portfolioBtn: <FaPlus />,
  },
  {
    id: 2,
    portfolioThumb: portfolioThumb2,
    portfolioSubTilte: "Technology",
    portfolioTitle: "Cyber Security & Protect",
    portfolioUrl: "/portfolio_details",
    portfolioBtn: <FaPlus />,
  },
  {
    id: 3,
    portfolioThumb: portfolioThumb3,
    portfolioSubTilte: "IT Solution",
    portfolioTitle: "Website Development",
    portfolioUrl: "/portfolio_details",
    portfolioBtn: <FaPlus />,
  },
  {
    id: 4,
    portfolioThumb: portfolioThumb4,
    portfolioSubTilte: "Technology",
    portfolioTitle: "Cyber Security & Protect",
    portfolioUrl: "/portfolio_details",
    portfolioBtn: <FaPlus />,
  },
  {
    id: 5,
    portfolioThumb: portfolioThumb2,
    portfolioSubTilte: "IT Solution",
    portfolioTitle: "Website Development",
    portfolioUrl: "/portfolio_details",
    portfolioBtn: <FaPlus />,
  },
];

const Portfolio = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className="portfolio2 relative z-10 py-28 bg-white">
      <div className="Container">
        <div>
          <h5 className="font-FiraSans text-[19px] font-semibold text-PrimaryColor-0 relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            PORTFOLIO
          </h5>
          <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
            Our Completed <span className="text-PrimaryColor-0">Projects</span>
          </h1>
        </div>
      </div>
      <div className="mt-[60px] 2xl:mx-[60px]">
        <Swiper {...settings}>
          <div>
            {portfolioData.map(
              ({
                id,
                portfolioThumb,
                portfolioSubTilte,
                portfolioTitle,
                portfolioUrl,
                portfolioBtn,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div>
                      <PortfolioCard
                        portfolioThumb={portfolioThumb}
                        portfolioSubTilte={portfolioSubTilte}
                        portfolioUrl={portfolioUrl}
                        portfolioTitle={portfolioTitle}
                        portfolioBtn={portfolioBtn}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
