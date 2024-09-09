/* eslint-disable no-unused-vars */
import serviceIcon from "/images/service7.png";
import serviceIcon2 from "/images/service8.png";
import serviceIcon3 from "/images/service9.png";
import serviceIcon4 from "/images/service10.png";
import ServiceCard from "./ServiceCard";
import { PiStarFourFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: "Business Planning",
    serviceDesc:
      "Morem area are psum dolor com sitteme odern sectet aweur chat adipiscing always.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: "Problem-Solving",
    serviceDesc:
      "Morem area are psum dolor com sitteme odern sectet aweur chat adipiscing always.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceTitle: "Project Reporting",
    serviceDesc:
      "Morem area are psum dolor com sitteme odern sectet aweur chat adipiscing always.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceTitle: "Professional Team",
    serviceDesc:
      "Morem area are psum dolor com sitteme odern sectet aweur chat adipiscing always.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
  },
];

const Service = () => {
  return (
    <section className="pt-28 pb-[120px] bg-HeadingColor-0 relative z-10">
      <div className="Container">
        <div className="grid gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="font-FiraSans text-lg font-medium text-PrimaryColor-0 flex items-center gap-2">
              <PiStarFourFill size={"14"} />
              OUT TOPTECH SERVICES
            </h5>
            <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-4 mb-4">
              Let’s Discover Our Service
              <br /> Features Charter.
            </h1>
          </div>
          <div className="flex lg:justify-end">
            <Link to={"/about"}>
              <button className="primary-btn4">{`Make An Appointment`}</button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[34px]">
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceBtn,
            }) => {
              return (
                <>
                  <div key={id}>
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceTitle={serviceTitle}
                      serviceDesc={serviceDesc}
                      serviceUrl={serviceUrl}
                      serviceBtn={serviceBtn}
                    />
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
