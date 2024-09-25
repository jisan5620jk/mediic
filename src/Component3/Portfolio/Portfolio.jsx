import PortfolioCard from './PortfolioCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolioThumb from '/images/port1.jpg';
import portfolioThumb2 from '/images/port2.jpg';
import portfolioThumb3 from '/images/port3.jpg';
import portfolioThumb4 from '/images/port4.jpg';
import 'swiper/css';
import { FaSquareFull } from 'react-icons/fa6';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const PortfolioData = [
  {
    id: 1,
    portfolioThumb: portfolioThumb,
    portfolioShape: <FaSquareFull />,
    portfolioTitle: 'Speech Therapy',
    portfolioUrl: '/',
    btnIcon: <HiOutlineArrowRight />,
  },
  {
    id: 2,
    portfolioThumb: portfolioThumb2,
    portfolioShape: <FaSquareFull />,
    portfolioTitle: 'Plastic Surgery',
    portfolioUrl: '/',
    btnIcon: <HiOutlineArrowRight />,
  },
  {
    id: 3,
    portfolioThumb: portfolioThumb3,
    portfolioShape: <FaSquareFull />,
    portfolioTitle: 'Dental Whitening',
    portfolioUrl: '/',
    btnIcon: <HiOutlineArrowRight />,
  },
  {
    id: 4,
    portfolioThumb: portfolioThumb4,
    portfolioShape: <FaSquareFull />,
    portfolioTitle: 'Physical Therapy',
    portfolioUrl: '/',
    btnIcon: <HiOutlineArrowRight />,
  },
  {
    id: 5,
    portfolioThumb: portfolioThumb2,
    portfolioShape: <FaSquareFull />,
    portfolioTitle: 'Dental Whitening',
    portfolioUrl: '/',
    btnIcon: <HiOutlineArrowRight />,
  },
];

const Portfolio = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    autoplay: true,
    draggable:true,
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
      1400: {
        slidesPerView: 4,
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
    <section className='portfolio mx-2 lg:mx-[50px] px-2 lg:px-[50px]  bg-gradient-to-t from-BodyBg-0 from-25% py-[120px] relative rounded-b-[30px]'>
      <div className='relative z-10'>
        <Swiper
          {...settings}
          pagination={pagination}
          modules={[Pagination]}
        >
          {PortfolioData.map(
            ({
              id,
              portfolioThumb,
              portfolioShape,
              portfolioTitle,
              portfolioUrl,
              btnIcon,
            }) => {
              return (
                <SwiperSlide key={id}>
                  <div className='pb-[94px]'>
                    <PortfolioCard
                      portfolioThumb={portfolioThumb}
                      portfolioShape={portfolioShape}
                      portfolioTitle={portfolioTitle}
                      portfolioUrl={portfolioUrl}
                      btnIcon={btnIcon}
                    />
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
