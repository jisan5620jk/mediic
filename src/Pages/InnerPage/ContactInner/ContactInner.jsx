import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import ContactBox from './ContactBox/ContactBox';
import Map from './Map';
import Appointment from '../../../Component1/Appointment/Appointment';
import Subscribe from '../../../Component1/Subscribe/Subscribe';

const ContactInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Contact Us'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Contact Us'}
      />
      <Appointment />
      <ContactBox />
      <Map />
      <Subscribe />
    </>
  );
};

export default ContactInner;
