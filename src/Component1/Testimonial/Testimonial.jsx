/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import testThumb from "/images/testi_thumb.png";
import testiProfile from "/images/testi_author.png";
import { RiDoubleQuotesR } from "react-icons/ri";

const testiData = [
  {
    id: 1,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `“Conveniently transform error-free architectures whereas
									maximizing collaboration and idea-sharing. Intrinsicly
									team driven web-readiness vis-a-vis equity invested
									Appropriately underwhelm  proactive leadership skills 
									without future-proof applications”`,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Web Developer",
    testiProfile: testiProfile,
  },
  {
    id: 2,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `“Conveniently transform error-free architectures whereas
									maximizing collaboration and idea-sharing. Intrinsicly
									team driven web-readiness vis-a-vis equity invested
									Appropriately underwhelm  proactive leadership skills 
									without future-proof applications”`,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Web Developer",
    testiProfile: testiProfile,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <section className="py-[30px] bg-PrimaryColor-0 rounded-[40px] mx-2 xl:mx-5 relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 2xl:gap-0 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img src={testThumb} draggable="false" className="2xl:-ml-[16rem] 2xl:max-w-[inherit]" />
            <div className="sm:flex items-center gap-2 absolute right-0 2xl:right-20 bottom-2 hidden">
              <h6 className="size-[42px] lg:size-7 xl:size-8 2xl:size-[42px] lg:text-base xl:text-lg 2xl:text-xl rounded-full bg-[#ff9c01] text-xl flex items-center justify-center text-white">
                <MdOutlineStarPurple500 />
              </h6>
              <p className="font-FiraSans font-medium text-[22px] lg:text-base xl:text-lg 2xl:text-[22px] text-white">
                Avg Ratings 4.9
              </p>
            </div>
          </div>
          <div>
            <Swiper {...settings}>
              <div>
                {testiData.map(
                  ({
                    id,
                    testiQuote,
                    testiRatingIcon,
                    testiName,
                    testiProfile,
                    testiDesignation,
                    testiDesc,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <TestimonialCard
                          testiQuote={testiQuote}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiProfile={testiProfile}
                          testiDesc={testiDesc}
                        />
                      </SwiperSlide>
                    );
                  }
                )}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
