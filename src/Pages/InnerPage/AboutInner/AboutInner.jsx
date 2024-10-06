import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import About from './About';
import Mission from './Mission/Mission';
import Testimonial from './Testimonial/Testimonial';
import Subscribe from '../../../Component1/Subscribe/Subscribe';

const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'About Us'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'About Us'}
      />
      <About />
      <Mission />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default AboutInner;
