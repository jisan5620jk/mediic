import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./banner.css";
import "swiper/css/pagination";
import BannerNavigation from "./BannerNavigation";
import { PiStarFourFill } from "react-icons/pi";

const Banner = () => {
  const settings = {
    loop: true,
    speed: 2000,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    duration: 3000,
  };
  return (
    <div className="relative">
      <Swiper {...settings}>
        <SwiperSlide>
          <section className="bg-[url('/images/banner-slider.png')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[800px] lg:h-[960px] xl:h-[952px] flex items-center">
            <div className="Container">
              <div className="relative banner-content text-center pt-[47px]">
                <h5 className="font-FiraSans text-lg flex items-center gap-2 justify-center text-white font-medium mb-6">
                  <PiStarFourFill size={"14"} /> TOP BUSENESS SOLUTION IN 2024{" "}
                  <PiStarFourFill size={"14"} />
                </h5>
                <h1 className="font-FiraSans font-bold text-white text-xl sm:text-[38px] sm:leading-[56px] md:text-[46px] md:leading-[54px] xl:text-[66px] xl:leading-[65px]">
                  Decoding Trends through
                </h1>
                <h1 className="font-FiraSans font-bold text-white text-xl sm:text-[38px] sm:leading-[56px] md:text-[46px] md:leading-[54px] xl:text-[66px] xl:leading-[65px] -mt-0 sm:-mt-3 md:mt-2 lg:mt-2">
                  Passion and Peolpe
                </h1>
                <div className="flex justify-center m-auto mt-14">
                  <Link to={"/about"}>
                    <button className="primary-btn4">{`Discover More`}</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/images/banner-slider.png')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[800px] lg:h-[960px] xl:h-[952px] flex items-center">
            <div className="Container">
              <div className="relative banner-content text-center pt-[47px]">
                <h5 className="font-FiraSans text-lg flex items-center gap-2 justify-center text-white font-medium mb-6">
                  <PiStarFourFill size={"14"} /> TOP BUSENESS SOLUTION IN 2024{" "}
                  <PiStarFourFill size={"14"} />
                </h5>
                <h1 className="font-FiraSans font-bold text-white text-xl sm:text-[38px] sm:leading-[56px] md:text-[46px] md:leading-[54px] xl:text-[66px] xl:leading-[65px]">
                  Decoding Trends through
                </h1>
                <h1 className="font-FiraSans font-bold text-white text-xl sm:text-[38px] sm:leading-[56px] md:text-[46px] md:leading-[54px] xl:text-[66px] xl:leading-[65px] -mt-0 sm:-mt-3 md:mt-2 lg:mt-2">
                  Passion and Peolpe
                </h1>
                <div className="flex justify-center m-auto mt-14">
                  <Link to={"/about"}>
                    <button className="primary-btn4">{`Discover More`}</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <BannerNavigation />
      </Swiper>
    </div>
  );
};

export default Banner;
