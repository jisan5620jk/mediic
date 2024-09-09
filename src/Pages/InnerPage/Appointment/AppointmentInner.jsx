import { FaArrowRightLong } from "react-icons/fa6";
import Process from "../../../Component1/Process/Process";
import Appointment from "./Appointment";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";

const AppointmentInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Book Appointment"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Book Appiontment"}
      />
      <Appointment />
      <Process />
    </>
  );
};

export default AppointmentInner;
