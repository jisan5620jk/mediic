import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Newsletter from "./Newsletter/Newsletter";
import WhyChooseUs from "./WhyChooseUs";


const WhyChoose = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Why Choose Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Why Choose Us"}
      />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
};

export default WhyChoose;
