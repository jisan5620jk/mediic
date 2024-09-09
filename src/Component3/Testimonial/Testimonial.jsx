/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import TestimonialNavigation from "./TestimonialNavigation";

const testiData = [
  {
    id: 1,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
  {
    id: 2,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
  {
    id: 3,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
  {
    id: 4,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
  {
    id: 5,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="testimonial py-28 bg-[url(/images/testi-bg.jpg)] bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            SERVICE WE PROVIDE
          </h5>
          <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
            Customer’s Awesome Feedback <br />
            About Our <span className="text-PrimaryColor-0">Services</span>
          </h1>
        </div>
        <div className="mt-[46px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pt-[80px] md:pt-[150px]">
                        <TestimonialCard
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
            <TestimonialNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
