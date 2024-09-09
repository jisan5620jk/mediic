/* eslint-disable no-unused-vars */
import testiImg from "/images/testi1.png";
import testiImg2 from "/images/testi2.png";
import testiImg3 from "/images/testi3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";
import { IoStar } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <IoStar />,
    testiName: "Founder & CEO",
    testiDesignation: "Web Developer",
    testiDesc: `seargin is awe-inspiring. Their relentless of
    justice and attention to detail gave me peace
    of mind. I highly recommend their legal
    services; they are true advocates for clients.`,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <IoStar />,
    testiName: "Anjelina Watson",
    testiDesignation: "UI/UX Designer",
    testiDesc: `seargin is awe-inspiring. Their relentless of
    justice and attention to detail gave me peace
    of mind. I highly recommend their legal
    services; they are true advocates for clients.`,
  },
  {
    id: 3,
    testiImg: testiImg3,
    testiRatingIcon: <IoStar />,
    testiName: "Al-Amin Islam",
    testiDesignation: "IT Specialist",
    testiDesc: `seargin is awe-inspiring. Their relentless of
    justice and attention to detail gave me peace
    of mind. I highly recommend their legal
    services; they are true advocates for clients.`,
  },
  {
    id: 4,
    testiImg: testiImg2,
    testiRatingIcon: <IoStar />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
    testiDesc: `seargin is awe-inspiring. Their relentless of
    justice and attention to detail gave me peace
    of mind. I highly recommend their legal
    services; they are true advocates for clients.`,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
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
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="pt-28 pb-[120px] bg-white relative z-10">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-lg font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
            <PiStarFourFill size={"14"} />
            TESTIMONIAL
            <PiStarFourFill size={"14"} />
          </h5>
          <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-4 mb-4 pb-1">
            What Our Loving Clients Saying
          </h1>
        </div>
        <div className="mt-[30px]">
          <Swiper {...settings}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiImg,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pt-3">
                        <TestimonialCard
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
