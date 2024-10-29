import serviceThumb from '/images/srvce.png';
import serviceThumb2 from '/images/srvce2.png';
import serviceThumb3 from '/images/srvce3.png';
import serviceThumb4 from '/images/srvce4.png';
import ServiceCard from './ServiceCard';
import serviceShape from '/images/srvce-shp.png';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { LuArrowUpRight } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ServiceNavigation from './ServiceNavigation';

const ServiceData = [
  {
    id: 1,
    serviceThumb: serviceThumb,
    serviceShape: serviceShape,
    serviceSubTitle: 'X-Ray',
    serviceTitle: 'Digital X-Ray',
    serviceUrl: '/',
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 2,
    serviceThumb: serviceThumb2,
    serviceShape: serviceShape,
    serviceSubTitle: 'Dental',
    serviceTitle: 'Dentel Fixing',
    serviceUrl: '/',
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 3,
    serviceThumb: serviceThumb3,
    serviceShape: serviceShape,
    serviceSubTitle: 'Surgery',
    serviceTitle: 'Human Brain Surgery',
    serviceUrl: '/',
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 4,
    serviceThumb: serviceThumb4,
    serviceShape: serviceShape,
    serviceSubTitle: 'Vacchine',
    serviceTitle: 'Vacchine Services',
    serviceUrl: '/',
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 5,
    serviceThumb: serviceThumb3,
    serviceShape: serviceShape,
    serviceSubTitle: 'Surgery',
    serviceTitle: 'Human Brain Surgery',
    serviceUrl: '/',
    btnIcon: <LuArrowUpRight />,
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
        slidesPerView: 4.35,
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
    <section className='service px-5 2xl:px-20 bg-Secondarycolor-0 bg-cover bg-bottom bg-no-repeat py-[120px] relative'>
      <div className='grid grid-cols-12 md:items-center border-b border-BorderColor2-0 pb-7 gap-7 lg:gap-0'>
        <div
          className='col-span-12 md:col-span-6 lg:col-span-4'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <h1 className='font-AlbertSans font-bold uppercase text-white text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[34px] lg:leading-[44px] xl:text-[48px] xl:leading-[58px] 2xl:text-[60px] 2xl:leading-[70px]'>
            Provide <br />
            Best Services
          </h1>
        </div>
        <div
          className='col-span-12 md:col-span-6 lg:col-span-5 flex justify-start lg:justify-center'
          data-aos='fade-down'
          data-aos-duration='1000'
        >
          <p className='font-DMSans text-lg text-TextColor-0'>
            Enthusiastically orchestrate competitive e-services whereas superior{' '}
            <br className='hidden 2xl:block' />
            Conveniently disintermediate innovative solutions through impactfuls{' '}
            <br className='hidden 2xl:block' />
            tailers without seamless markets network .
          </p>
        </div>
        <div
          className='col-span-12 lg:col-span-3 flex lg:justify-end'
          data-aos='fade-left'
          data-aos-duration='1000'
        >
          <Link to={'/service_details'}>
            <button className='primary-btn mt-3 px-8'>
              View All Services
              <GoArrowRight
                size={'22'}
                className='-rotate-45'
              />
            </button>
          </Link>
        </div>
      </div>
      <div className='relative z-10 mt-[60px] before:absolute before:z-40 before:left-[25px] before:bottom-[302px] before:rotate-0 before:w-[2px] 2xl:before:h-[170px] before:bg-gradient-to-t before:from-PrimaryColor-0 before:to-transparent'>
        <Swiper
          {...settings}
          pagination={pagination}
          modules={[Pagination]}
        >
          {ServiceData.map(
            ({
              id,
              serviceThumb,
              serviceShape,
              serviceSubTitle,
              serviceTitle,
              serviceUrl,
              btnIcon,
            }) => {
              return (
                <SwiperSlide key={id}>
                  <div
                    className='pb-[60px] service-box'
                    data-aos='fade-up'
                    data-aos-duration='1000'
                  >
                    <ServiceCard
                      serviceThumb={serviceThumb}
                      serviceShape={serviceShape}
                      serviceSubTitle={serviceSubTitle}
                      serviceTitle={serviceTitle}
                      serviceUrl={serviceUrl}
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
    </section>
  );
};

export default Service;
