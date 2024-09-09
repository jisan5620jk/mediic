/* eslint-disable no-unused-vars */
import latestWorkThumb from "/images/work-1.jpg";
import latestWorkThumb2 from "/images/work-2.jpg";
import latestWorkThumb3 from "/images/work-3.jpg";
import latestWorkThumb4 from "/images/work-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LatestWorkCard from "./LatestWorkCard";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const LatestWorkData = [
  {
    id: 1,
    latestWorkThumb: latestWorkThumb,
    latestWorkTitle: "Business Implement",
    latestWorkDesc: "Technology",
    latestWorkUrl: "/project_details",
    latestWorkBtn: <HiMiniArrowUpRight />,
  },
  {
    id: 2,
    latestWorkThumb: latestWorkThumb2,
    latestWorkTitle: "Business Implement",
    latestWorkDesc: "Technology",
    latestWorkUrl: "/project_details",
    latestWorkBtn: <HiMiniArrowUpRight />,
  },
  {
    id: 3,
    latestWorkThumb: latestWorkThumb3,
    latestWorkTitle: "Business Implement",
    latestWorkDesc: "Technology",
    latestWorkUrl: "/project_details",
    latestWorkBtn: <HiMiniArrowUpRight />,
  },
  {
    id: 4,
    latestWorkThumb: latestWorkThumb4,
    latestWorkTitle: "Business Implement",
    latestWorkDesc: "Technology",
    latestWorkUrl: "/project_details",
    latestWorkBtn: <HiMiniArrowUpRight />,
  },
  {
    id: 5,
    latestWorkThumb: latestWorkThumb2,
    latestWorkTitle: "Business Implement",
    latestWorkDesc: "Technology",
    latestWorkUrl: "/project_details",
    latestWorkBtn: <HiMiniArrowUpRight />,
  },
  {
    id: 6,
    latestWorkThumb: latestWorkThumb,
    latestWorkTitle: "Business Implement",
    latestWorkDesc: "Technology",
    latestWorkUrl: "/project_details",
    latestWorkBtn: <HiMiniArrowUpRight />,
  },
];

const LatestWork = () => {
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
    <section className="latest-work px-2 lg:px-0 relative z-10 pt-28 pb-[120px]">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            LATEST WORKS
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
            Recently We’ve Finishd those works
            <br />
            With highly Satisfaction
          </h1>
        </div>
      </div>
      <div className="mt-[58px] xl:mx-5 2xl:mx-12">
        <Swiper {...settings}>
          <div>
            {LatestWorkData.map(
              ({
                id,
                latestWorkThumb,
                latestWorkDesc,
                latestWorkTitle,
                latestWorkUrl,
                latestWorkBtn,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <LatestWorkCard
                      latestWorkThumb={latestWorkThumb}
                      latestWorkDesc={latestWorkDesc}
                      latestWorkUrl={latestWorkUrl}
                      latestWorkTitle={latestWorkTitle}
                      latestWorkBtn={latestWorkBtn}
                    />
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

export default LatestWork;
