import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brandThumb from '/images/bran.png';
import brandThumb2 from "/images/bran2.png";
import brandThumb3 from "/images/bran3.png";
import brandThumb4 from "/images/bran4.png";
import brandThumb5 from "/images/bran5.png";

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
    <div className='py-[60px] bg-PrimaryColor-0 mx-4 lg:mx-7 xl:mx-10 rounded-b-[30px]'>
      <div className='Container relative z-10'>
        <Swiper {...settings}>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb2}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb3}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb4}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb5}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
