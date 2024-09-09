/* eslint-disable no-unused-vars */
import featureIcon from "/images/feature3-icon.png";
import featureIcon2 from "/images/feature3-icon-2.png";
import featureIcon3 from "/images/feature3-icon-3.png";
import featureIcon4 from "/images/feature3-icon-4.png";
import FeatureCard from "./FeatureCard";
import { FaAnglesRight } from "react-icons/fa6";

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: "Managed IT Services",
    featureDesc: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
    featureBtnLink: "/service",
    featureBtnContent: "Read More",
    featureBtnIcon: <FaAnglesRight />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: "Cloud Services",
    featureDesc: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
    featureBtnLink: "/service",
    featureBtnContent: "Read More",
    featureBtnIcon: <FaAnglesRight />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: "Machine Learning",
    featureDesc: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
    featureBtnLink: "/service",
    featureBtnContent: "Read More",
    featureBtnIcon: <FaAnglesRight />,
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: "Data Security",
    featureDesc: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
    featureBtnLink: "/service",
    featureBtnContent: "Read More",
    featureBtnIcon: <FaAnglesRight />,
  },
];

const Feature = () => {
  return (
    <section className="pb-28 relative z-10 -mt-[90px]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
          {processData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureBtnLink,
              featureBtnContent,
              featureBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureBtnLink={featureBtnLink}
                    featureBtnContent={featureBtnContent}
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
