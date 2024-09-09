import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import PricingFaq from "./Accordion/PricingFaq";
import Pricing from "../../../Component3/Pricing/Pricing";

const PricingInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Affordable Price"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Pricing"}
      />
      <Pricing />
      <div>
        <PricingFaq />
      </div>
    </>
  );
};

export default PricingInner;
