/* eslint-disable no-unused-vars */
import { FaArrowRightLong } from "react-icons/fa6";
import featureIcon from "/images/service1.png";
import featureIcon2 from "/images/service2.png";
import featureIcon3 from "/images/service3.png";
import featureIcon4 from "/images/service4.png";
import featureIcon5 from "/images/service5.png";
import featureIcon6 from "/images/service6.png";
import FeatureCard from "./FeatureCard";
import { PiStarFourFill } from "react-icons/pi";

const FeatureData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: `Strategic marketing`,
    featureDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    featureUrl: "/service_details",
    featureBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: `Investment Planning`,
    featureDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    featureUrl: "/service_details",
    featureBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: `Insights & analytics`,
    featureDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    featureUrl: "/service_details",
    featureBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: `Business consulting`,
    featureDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    featureUrl: "/service_details",
    featureBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 5,
    featureIcon: featureIcon5,
    featureTitle: `Finance & Restructuring`,
    featureDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    featureUrl: "/service_details",
    featureBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 6,
    featureIcon: featureIcon6,
    featureTitle: `Audit and Evaluation`,
    featureDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    featureUrl: "/service_details",
    featureBtnIcon: <FaArrowRightLong />,
  },
];

const Feature = () => {
  return (
    <section className="pt-28 pb-[120px] relative bg-BodyBg-0">
      <div className="Container">
        <div className="grid grid-cols-1 lg:items-center lg:grid-cols-2 gap-1 mb-6">
          <div>
            <h5 className="font-FiraSans text-lg font-medium text-PrimaryColor-0 flex items-center gap-2">
              <PiStarFourFill size={"14"} />
              SERVICE FEATURES
            </h5>
            <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[46px] xl:leading-[55px] text-HeadingColor-0 mt-4 mb-6">
              Let’s Discover Our Service
              <br /> Features Charter.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:items-center lg:grid-cols-3 gap-x-[72px] gap-y-7">
          {FeatureData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureUrl,
              featureBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureBtnIcon={featureBtnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
