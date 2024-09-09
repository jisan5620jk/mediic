import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import ContactBox from "./ContactBox/ContactBox";
import Map from "./Map";
import ContactForm from "./ContactForm";

const ContactInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Contact Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Contact Us"}
      />
      <ContactBox />
      <ContactForm />
      <Map />
    </>
  );
};

export default ContactInner;
