import serviceIcon from '/images/service-icon.png';
import serviceIcon2 from '/images/service-icon2.png';
import serviceIcon3 from '/images/service-icon3.png';
import serviceIcon4 from '/images/service-icon4.png';
import serviceIcon5 from '/images/service-icon5.png';
import btnIcon from '/images/arrow.png';
import serviceShape from '/images/doctor-set.png';
import { FaCircle } from 'react-icons/fa6';
import ServiceCard2 from './ServiceCard2';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import circleShape from '/images/crcle-bg.png';


const Service2 = () => {
    useEffect(() => {
      const handleMouseEnter = (event) => {
        event.target.classList.add('active');

        // Remove 'active' class from siblings
        const parent = event.target.parentElement;
        if (parent) {
          const siblings = parent.querySelectorAll('.service-box');
          siblings.forEach((sibling) => {
            if (sibling !== event.target) {
              sibling.classList.remove('active');
            }
          });
        }
      };

      const elements = document.querySelectorAll('.service-box');
      elements.forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter);
      });

      // Clean up event listeners when component unmounts
      return () => {
        elements.forEach((element) => {
          element.removeEventListener('mouseenter', handleMouseEnter);
        });
      };
    }, []);
  return (
    <section className='bg-gradient-to-t from-BodyBg-0 from-25% px-2 xl:mx-10 rounded-b-[30px] py-[120px] relative z-20 -mb-20 overflow-hidden'>
      <div className='absolute -z-10 top-16 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <img
          src={circleShape}
          draggable='false'
          className='max-w-[inherit] w-[inherit]'
        />
      </div>
      <div className='text-center'>
        <div className='inline-block mb-5'>
          <h6 className='flex items-center justify-start gap-2 bg-white bg-opacity-30 text-PrimaryColor-0 text-[15px] font-semibold border border-white border-opacity-10 rounded-full font-AlbertSans px-[22px] py-2 uppercase'>
            <FaCircle size={'8'} />
            Hospital Motivation
          </h6>
        </div>
        <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-[20px] leading-[28px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[46px] xl:leading-[57px] 2xl:text-[55px] 2xl:leading-[67px]'>
          Medical Department
        </h1>
      </div>
      <div className='Container'>
        <div className='flex flex-col items-center justify-between gap-8 w-full relative z-10 mt-[44px]'>
          <div className='service-box'>
            <ServiceCard2
              serviceIcon={serviceIcon}
              serviceShape={serviceShape}
              serviceTitle='Health issues'
              serviceDesc='Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development'
              serviceUrl='/service_details'
              btnContent='Read More'
              btnIcon={btnIcon}
            />
          </div>
          <div className='service-box'>
            <ServiceCard2
              serviceIcon={serviceIcon5}
              serviceShape={serviceShape}
              serviceTitle='Ophthalmology'
              serviceDesc='Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development'
              serviceUrl='/service_details'
              btnContent='Read More'
              btnIcon={btnIcon}
            />
          </div>
          <div className='service-box active'>
            <ServiceCard2
              serviceIcon={serviceIcon2}
              serviceShape={serviceShape}
              serviceTitle='Dental Services'
              serviceDesc='Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development'
              serviceUrl='/service_details'
              btnContent='Read More'
              btnIcon={btnIcon}
            />
          </div>
          <div className='service-box'>
            <ServiceCard2
              serviceIcon={serviceIcon3}
              serviceShape={serviceShape}
              serviceTitle='Neurology Care'
              serviceDesc='Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development'
              serviceUrl='/service_details'
              btnContent='Read More'
              btnIcon={btnIcon}
            />
          </div>
          <div className='service-box'>
            <ServiceCard2
              serviceIcon={serviceIcon4}
              serviceShape={serviceShape}
              serviceTitle='Adult medicine'
              serviceDesc='Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development'
              serviceUrl='/service_details'
              btnContent='Read More'
              btnIcon={btnIcon}
            />
          </div>
        </div>
        <div className='flex justify-center items-center gap-5 mt-14'>
          <span className='flex-1 w-full h-[1px] bg-TextColor-0'></span>
          <p className='font-AlbertSans text-TextColor2-0'>
            Click any of the avobe services to learn more View{' '}
            <Link
              to={'/service_details'}
              className='underline text-PrimaryColor-0'
            >
              Our All Services
            </Link>
          </p>
          <span className='flex-1 w-full h-[1px] bg-TextColor-0'></span>
        </div>
      </div>
    </section>
  );
};

export default Service2;
