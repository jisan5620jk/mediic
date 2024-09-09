/* eslint-disable no-unused-vars */
import serviceIcon from "/images/service3-icon1.png";
import serviceIcon2 from "/images/service3-icon2.png";
import serviceIcon3 from "/images/service3-icon3.png";
import serviceIcon4 from "/images/service3-icon4.png";
import serviceIcon5 from "/images/service3-icon5.png";
import serviceIcon6 from "/images/service3-icon6.png";
import ServiceCard from "./ServiceCard";
import { FaAnglesRight } from "react-icons/fa6";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: "Web Design",
    serviceDesc:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
    serviceBtnIcon: <FaAnglesRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: "Motion Design",
    serviceDesc:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
    serviceBtnIcon: <FaAnglesRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
    serviceBtnIcon: <FaAnglesRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceTitle: "Web Development",
    serviceDesc:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
    serviceBtnIcon: <FaAnglesRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceTitle: "App Development",
    serviceDesc:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
    serviceBtnIcon: <FaAnglesRight />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceTitle: "Creative Solution",
    serviceDesc:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    serviceUrl: "/servie_details",
    serviceBtn: "Read More",
    serviceBtnIcon: <FaAnglesRight />,
  },
];

const Service = () => {
  return (
    <section className="pt-28 pb-[120px] bg-[url('/images/service-bg.jpg')] bg-cover bg-no-repeat bg-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-HeadingColor-0 before:-z-10 before:opacity-80">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            SERVICE WE PROVIDE
          </h5>
          <h1 className="font-FiraSans font-bold text-lg leading-6 sm:text-[32px] sm:leading-[42px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-white mt-3 mb-4">
            All Professional We’re Offering Best & <br />
            IT Solutions & <span className="text-PrimaryColor-0">Services</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[54px]">
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceBtn,
              serviceBtnIcon,
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
                      serviceBtnIcon={serviceBtnIcon}
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
