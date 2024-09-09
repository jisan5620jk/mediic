/* eslint-disable no-unused-vars */
import featureIcon from "/images/feature-icon-1.png";
import featureIcon2 from "/images/feature-icon-2.png";
import featureIcon3 from "/images/feature-icon-3.png";
import featureIcon4 from "/images/feature-icon-4.png";
import FeatureCard from "./FeatureCard";

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: "22+ Year Experience",
    featureDesc: "Completely fashion reliable more products grow business",
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: "Dedicated Members",
    featureDesc: "Completely fashion reliable more products grow business",
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: "Valuable Supports",
    featureDesc: "Completely fashion reliable more products grow business",
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: "Valuable Supports",
    featureDesc: "Completely fashion reliable more products grow business",
  },
];

const Feature = () => {
  return (
    <section className="bg-white relative z-10 before:absolute before:top-0 before:left-0 before:bg-PrimaryColor-0 before:w-full before:h-1/2 before:-z-10 py-[120px]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
          {processData.map(
            ({
              id,
              featureIcon,
              featureshape,
              featureshape2,
              featureTitle,
              featureDesc,
              featureUrl,
              featureBtn,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureshape={featureshape}
                    featureshape2={featureshape2}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureBtn={featureBtn}
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
