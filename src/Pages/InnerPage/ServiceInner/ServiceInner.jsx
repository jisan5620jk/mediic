import { FaArrowRightLong } from 'react-icons/fa6';
import serviceIcon from '/images/srvce-icn.png';
import serviceIcon2 from '/images/srvce-icn-1.png';
import serviceIcon3 from '/images/srvce-icn2.png';
import serviceIcon4 from '/images/srvce-icn-6.png';
import serviceIcon5 from '/images/srvce-icn3.png';
import serviceIcon6 from '/images/srvce-icn-3.png';
import serviceIcon7 from '/images/srvce-icn4.png';
import serviceIcon8 from '/images/srvce-icn-4.png';
import serviceIcon9 from '/images/srvce-icn5.png';
import serviceIcon10 from '/images/srvce-icn-5.png';
import serviceIcon11 from '/images/srvce-icn6.png';
import serviceIcon12 from '/images/srvce-icn-2.png';
import ServiceCard from './ServiceCard';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Appoinment from './Appoinment/Appionment';
import Subscribe from '../../../Component1/Subscribe/Subscribe';

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceIcon2: serviceIcon2,
    serviceTitle: 'Couple Therapy',
    serviceDesc:
      'Professional mision capital without enterps medical users pros value added e-enabled creative technology via team.',
    serviceUrl: '/service_details',
    serviceButton: 'Read More',
  },
  {
    id: 2,
    serviceIcon: serviceIcon3,
    serviceIcon2: serviceIcon4,
    serviceTitle: 'Family Counseling',
    serviceDesc:
      'Professional mision capital without enterps medical users pros value added e-enabled creative technology via team.',
    serviceUrl: '/service_details',
    serviceButton: 'Read More',
  },
  {
    id: 3,
    serviceIcon: serviceIcon5,
    serviceIcon2: serviceIcon6,
    serviceTitle: 'Personal Meeting',
    serviceDesc:
      'Professional mision capital without enterps medical users pros value added e-enabled creative technology via team.',
    serviceUrl: '/service_details',
    serviceButton: 'Read More',
  },
  {
    id: 4,
    serviceIcon: serviceIcon7,
    serviceIcon2: serviceIcon8,
    serviceTitle: 'Anxiety Disorder',
    serviceDesc:
      'Professional mision capital without enterps medical users pros value added e-enabled creative technology via team.',
    serviceUrl: '/service_details',
    serviceButton: 'Read More',
  },
  {
    id: 5,
    serviceIcon: serviceIcon9,
    serviceIcon2: serviceIcon10,
    serviceTitle: 'Group Therapy',
    serviceDesc:
      'Professional mision capital without enterps medical users pros value added e-enabled creative technology via team.',
    serviceUrl: '/service_details',
    serviceButton: 'Read More',
  },
  {
    id: 6,
    serviceIcon: serviceIcon11,
    serviceIcon2: serviceIcon12,
    serviceTitle: 'Parening Lession',
    serviceDesc:
      'Professional mision capital without enterps medical users pros value added e-enabled creative technology via team.',
    serviceUrl: '/service_details',
    serviceButton: 'Read More',
  },
];

const ServiceInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Our Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Our Services'}
      />
      <section className='pt-[120px] relative z-10 bg-BodyBg-0'>
        <div className='Container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {serviceData.map(
              ({
                id,
                serviceIcon,
                serviceIcon2,
                serviceUrl,
                serviceButton,
                serviceTitle,
                serviceDesc,
              }) => {
                return (
                  <>
                    <div
                      key={id}
                      data-aos='fade-up'
                      data-aos-duration='1000'
                    >
                      <ServiceCard
                        serviceIcon={serviceIcon}
                        serviceIcon2={serviceIcon2}
                        serviceUrl={serviceUrl}
                        serviceButton={serviceButton}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                      />
                    </div>
                  </>
                );
              }
            )}
          </div>
        </div>
      </section>
      <Appoinment />
      <Subscribe />
    </>
  );
};

export default ServiceInner;
