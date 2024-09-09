import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelpCenter from "./HelpCenter";
import Map from "../ContactInner/Map";
import ContactBox from "../ContactInner/ContactBox/ContactBox";

const LocationInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Location"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Location"}
      />
      <HelpCenter />
      <Map />
      <ContactBox />
    </>
  );
};

export default LocationInner;
