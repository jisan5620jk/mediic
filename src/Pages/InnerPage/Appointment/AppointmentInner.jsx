import { FaArrowRightLong } from 'react-icons/fa6';
import Appointment from './Appointment';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Subscribe from '../../../Component1/Subscribe/Subscribe';

const AppointmentInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Book Appointment'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Appointment'}
      />
      <Appointment />
      <Subscribe />
    </>
  );
};

export default AppointmentInner;
