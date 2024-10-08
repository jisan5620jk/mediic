import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import brandThumb from '/images/brand.png';
import brandThumb2 from '/images/brand2.png';
import brandThumb3 from '/images/brand3.png';
import brandThumb4 from '/images/brand4.png';
import brandThumb5 from '/images/brand5.png';

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
    <div className='bg-BodyBg-0'>
      <div className='Container relative z-10'>
        <Swiper {...settings}>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb2}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb3}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb4}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb5}
                draggable='false'
                className='m-auto transition-all duration-500 hover:saturate-200'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
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
