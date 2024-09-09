import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brandThumb from "/images/brand_1.png";
import brandThumb2 from "/images/brand_2.png";
import brandThumb3 from "/images/brand_3.png";
import brandThumb4 from "/images/brand_4.png";
import brandThumb5 from "/images/brand_5.png";
import CountUp from "react-countup";

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="py-[94px]">
      <div className="Container relative z-10">
        <h5 className="font-FiraSans text-HeadingColor-0 text-sm sm:text-lg flex justify-center relative before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-[50px] before:h-[2px] before:bg-PrimaryColor-0 mb-[72px]">
          Worldwide <CountUp start={-11} end={1500} suffix={"+"} /> Trusted
          Clients with Consalt
        </h5>
        <Swiper {...settings}>
          <SwiperSlide>
            <div>
              <img src={brandThumb} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb2} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb3} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb4} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb5} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
