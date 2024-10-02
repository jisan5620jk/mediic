import serviceIcon from '/images/service-icn.png';
import serviceIcon2 from '/images/service-icn2.png';
import serviceIcon3 from '/images/service-icn3.png';
import btnIcon from '/images/arrow.png';
import ServiceCard from './ServiceCard';
import serviceShape from '/images/doctor-set.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceNavigation from './ServiceNavigation';
import { FaCircle } from 'react-icons/fa6';

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceShape: serviceShape,
    serviceSubTitle: 'Dentist',
    serviceTitle: 'Dental Care',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
  {
    id: 2,
    serviceIcon: serviceIcon3,
    serviceShape: serviceShape,
    serviceSubTitle: 'Orthopedic',
    serviceTitle: 'Orthopedic',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
  {
    id: 3,
    serviceIcon: serviceIcon2,
    serviceShape: serviceShape,
    serviceSubTitle: 'Anemia',
    serviceTitle: 'Hematology',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
  {
    id: 4,
    serviceIcon: serviceIcon3,
    serviceShape: serviceShape,
    serviceSubTitle: 'Orthopedic',
    serviceTitle: 'Orthopedic',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
];

const Service = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
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
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className='px-4 xl:px-10 bg-[url(/images/motivation-bg.jpg)] bg-cover bg-center bg-no-repeat pt-[240px] pb-[120px] relative'>
      <div className='text-center'>
        <div className='inline-block mb-5'>
          <h6 className='flex items-center justify-start gap-2 bg-white bg-opacity-0 text-white text-[15px] font-semibold border border-white border-opacity-10 rounded-full font-AlbertSans px-[22px] py-2 uppercase'>
            <FaCircle size={'8'} />
            Hospital Motivation
          </h6>
        </div>
        <h1 className='font-AlbertSans font-bold uppercase text-white text-[20px] leading-[28px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[46px] xl:leading-[57px] 2xl:text-[55px] 2xl:leading-[67px]'>
          Medical Department
        </h1>
      </div>
      <div className='Container'>
        <div className='relative z-10 mt-[44px]'>
          <Swiper {...settings}>
            {ServiceData.map(
              ({
                id,
                serviceIcon,
                serviceShape,
                serviceSubTitle,
                serviceTitle,
                serviceDesc,
                serviceUrl,
                btnContent,
                btnIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className='pb-[94px]'>
                      <ServiceCard
                        serviceIcon={serviceIcon}
                        serviceShape={serviceShape}
                        serviceSubTitle={serviceSubTitle}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                        serviceUrl={serviceUrl}
                        btnContent={btnContent}
                        btnIcon={btnIcon}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
            <ServiceNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
