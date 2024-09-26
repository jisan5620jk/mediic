import serviceIcon from '/images/service-icon.png';
import serviceIcon2 from '/images/service-icon2.png';
import serviceIcon3 from '/images/service-icon3.png';
import serviceIcon4 from '/images/service-icon4.png';
import serviceIcon5 from '/images/service-icon5.png';
import btnIcon from '/images/arrow.png';
import serviceShape from '/images/doctor-set.png';
import { FaCircle } from 'react-icons/fa6';
import ServiceCard2 from './ServiceCard2';

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceShape: serviceShape,
    serviceTitle: 'Common Illnesses',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceShape: serviceShape,
    serviceTitle: 'Ophthalmology',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceShape: serviceShape,
    serviceTitle: 'Dental Services',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceShape: serviceShape,
    serviceTitle: 'Neurology Care',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceShape: serviceShape,
    serviceTitle: 'Internal Medicine',
    serviceDesc:
      'Evolve professional intellectual capital from without enterprise user seamlessl prox value added e-commerce medical creams need and clean development',
    serviceUrl: '/',
    btnContent: 'Read More',
    btnIcon: btnIcon,
  },
];

const Service2 = () => {
  return (
    <section className='px-5 lg:px-10 bg-[url(/images/motivation-bg.jpg)] bg-cover bg-center bg-no-repeat py-[120px] relative'>
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
        <div className='flex items-center justify-between gap-8 w-full relative z-10 mt-[44px]'>
            {ServiceData.map(
              ({
                id,
                serviceIcon,
                serviceShape,
                serviceTitle,
                serviceDesc,
                serviceUrl,
                btnContent,
                btnIcon,
              }) => {
                return (
                    <div key={id}>
                      <ServiceCard2
                        serviceIcon={serviceIcon}
                        serviceShape={serviceShape}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                        serviceUrl={serviceUrl}
                        btnContent={btnContent}
                        btnIcon={btnIcon}
                      />
                    </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default Service2;
