/* eslint-disable no-unused-vars */
import testiImg from "/images/testi_author2.png";
import testiQuote from "/images/testi_icon2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import CountUp from "react-countup";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import TestimonialNavigation from "./TestimonialNavigation";
import Brand from "../Brand/Brand";

const testiData = [
  {
    id: 1,
    testiQuote: testiQuote,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Hemilton Masakajja",
    testiDesignation: "Web Developer",
    testiDesc: `Conveniently transform error-free architectures
                diness vis-a-vis equity invested Appropriately in
                underwhelm  proactive leadership skills without 
                future applications Consultant`,
  },
  {
    id: 2,
    testiQuote: testiQuote,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "UI/UX Designer",
    testiDesc: `Conveniently transform error-free architectures
                diness vis-a-vis equity invested Appropriately in
                underwhelm  proactive leadership skills without 
                future applications Consultant`,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="pt-28 pb-[98px] bg-BodyBg2-0 relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid grid-cols-6 gap-10 lg:gap-0 lg:grid-cols-12">
          <div className="col-span-6 lg:col-span-5">
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-white uppercase mb-3">
              Testimonial
            </h5>
            <h1 className="font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
              Trusted By The Genius <br /> People With Cosult
            </h1>
            <p className="font-FiraSans text-TextColor-0 mb-7">
              Media leadership skills before cross-media innovation <br className="hidden sm:block lg:hidden xl:block"/>{" "}
              develop standardized platforms without
            </p>
            <div className="relative flex items-center gap-5 border-t border-BorderColor2-0 sm:mr-10 pt-8">
              <div className="border-r border-BorderColor2-0 pr-5">
                <CountUp
                  start={-11}
                  prefix="4."
                  end={98}
                  suffix={""}
                  className="font-FiraSans text-4xl leading-[26px] md:text-[56px] md:leading-[40px] text-white font-medium"
                />
              </div>
              <div>
                <ul className="flex items-center gap-1">
                  <li className="text-[#ffb609]">
                    <FaStar size={"18"} />
                  </li>
                  <li className="text-[#ffb609]">
                    <FaStar size={"18"} />
                  </li>
                  <li className="text-[#ffb609]">
                    <FaStar size={"18"} />
                  </li>
                  <li className="text-[#ffb609]">
                    <FaStar size={"18"} />
                  </li>
                  <li className="text-[#ffb609]">
                    <FaStarHalfAlt size={"18"} />
                  </li>
                </ul>
                <p className="font-FiraSans sm:text-lg text-TextColor-0 capitalize mt-2">
                  Avg. Clients Ratings
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-7 relative">
            <Swiper {...settings}>
              <div>
                {testiData.map(
                  ({
                    id,
                    testiQuote,
                    testiImg,
                    testiRatingIcon,
                    testiName,
                    testiDesignation,
                    testiDesc,
                    testiShape,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className="pr-6">
                          <TestimonialCard
                            testiQuote={testiQuote}
                            testiImg={testiImg}
                            testiRatingIcon={testiRatingIcon}
                            testiName={testiName}
                            testiDesignation={testiDesignation}
                            testiDesc={testiDesc}
                            testiShape={testiShape}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  }
                )}
              </div>
              <TestimonialNavigation />
            </Swiper>
          </div>
        </div>
        <Brand />
      </div>
    </section>
  );
};

export default Testimonial;
