import { FaCircle } from "react-icons/fa6";
import whyChooseImg from "/images/choose-us-thumb.png";
import ServiceCard from "./ServiceCard";
import serviceIcon from "/images/choose-us-icon-1.png";
import serviceIcon2 from "/images/choose-us-icon-2.png";
import serviceIcon3 from "/images/choose-us-icon-3.png";
import serviceIcon4 from "/images/choose-us-icon-4.png";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: "Data Security",
    serviceDesc:
      "Monotonectally synergize granular to front markets task state data security semper maecenas ferform.",
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: "IT Services",
    serviceDesc:
      "Monotonectally synergize granular to front markets task state data security semper maecenas ferform.",
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceTitle: "Supports",
    serviceDesc:
      "Monotonectally synergize granular to front markets task state data security semper maecenas ferform.",
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceTitle: "Peoples",
    serviceDesc:
      "Monotonectally synergize granular to front markets task state data security semper maecenas ferform.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="pt-28 pb-[120px] p relative z-10 bg-[url(/images/choose-us-bg.jpg)]">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-24 lg:items-center mb-[100px]">
          <div>
            <h5 className="font-FiraSans text-lg font-semibold text-PrimaryColor-0">
              IT Support For Business
            </h5>
            <h1 className="font-FiraSans font-bold text-[20px] text-HeadingColor-0 leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] mt-[18px]">
              The Toptech IT Services Promise
            </h1>
            <p className="font-FiraSans text-TextColor2-0 mt-3 mb-7">
              Monotonectally synergize granular markets and front markets
              collaboratively task state of the art infrastructures for granular
              Maecenas varius sem dui buildings semper ante a viverra posuere
              maecenas fermentum.
            </p>
            <ul>
              <li className="flex items-center gap-3 font-FiraSans text-lg text-HeadingColor-0">
                <FaCircle size={"9"} className="text-PrimaryColor-0" />
                Achieve your goals and exceed expectations.
              </li>
              <li className="flex items-center gap-3 font-FiraSans text-lg text-HeadingColor-0 mt-4">
                <FaCircle size={"9"} className="text-PrimaryColor-0" />
                Building a website, mobile app or software.
              </li>
              <li className="flex items-center gap-3 font-FiraSans text-lg text-HeadingColor-0 mt-4">
                <FaCircle size={"9"} className="text-PrimaryColor-0" />
                Our platform is designed to help you.
              </li>
              <li className="flex items-center gap-3 font-FiraSans text-lg text-HeadingColor-0 mt-4">
                <FaCircle size={"9"} className="text-PrimaryColor-0" />
                Our platform places emphasis on user experience.
              </li>
            </ul>
          </div>
          <div>
            <img src={whyChooseImg} draggable="false" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] pt-[100px] border-t border-PrimaryColor-0">
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceNumber,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceButton,
              serviceBtnIcon,
            }) => {
              return (
                <>
                  <div key={id}>
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceNumber={serviceNumber}
                      serviceTitle={serviceTitle}
                      serviceDesc={serviceDesc}
                      serviceUrl={serviceUrl}
                      serviceButton={serviceButton}
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

export default WhyChooseUs;
