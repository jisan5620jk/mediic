import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Contact from "../../../Component2/Contact/Contact";
import WhyChoose from "../../../Component2/WhyChoose/WhyChoose";
import About from "./About";
import Counter from "../../../Component2/Counter/Counter";

const AboutInner2 = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <About />
      <Contact />
      <Counter />
      <WhyChoose />
    </>
  );
};

export default AboutInner2;
