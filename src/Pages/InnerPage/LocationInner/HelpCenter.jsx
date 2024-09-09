import HelpCenterCard from "./HelpCenterCard";
import helpCenterImg from "/images/flag-1.png";
import helpCenterImg2 from "/images/flag-2.png";
import helpCenterImg3 from "/images/flag-3.png";
import helpCenterIcon from "/images/location-icon.png";

const processData = [
  {
    id: 1,
    helpCenterImg: helpCenterImg,
    helpCenterTitle: "Paraguay.",
    helpCenterDesc: "2307 Road, New Town 126 Paraguay",
    helpCenterIcon: helpCenterIcon,
    helpCenterUrl: "",
    helpCenterBtn: "Help Center",
  },
  {
    id: 2,
    helpCenterImg: helpCenterImg2,
    helpCenterTitle: "Bangladesh.",
    helpCenterDesc: "307 Road Dhaka, New Market 326 BD",
    helpCenterIcon: helpCenterIcon,
    helpCenterUrl: "",
    helpCenterBtn: "Help Center",
  },
  {
    id: 3,
    helpCenterImg: helpCenterImg3,
    helpCenterTitle: "United States.",
    helpCenterDesc: "2307 Rd Brooklyn, New York 11226 USA",
    helpCenterIcon: helpCenterIcon,
    helpCenterUrl: "",
    helpCenterBtn: "Help Center",
  },
];

const HelpCenter = () => {
  return (
    <section className="py-28 relative bg-BodyBg-0 z-10 ">
      <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {processData.map(
              ({
                id,
                helpCenterImg,
                helpCenterTitle,
                helpCenterIcon,
                helpCenterDesc,
                helpCenterUrl,
                helpCenterBtn,
              }) => {
                return (
                  <div key={id}>
                    <HelpCenterCard
                      helpCenterImg={helpCenterImg}
                      helpCenterTitle={helpCenterTitle}
                      helpCenterIcon={helpCenterIcon}
                      helpCenterDesc={helpCenterDesc}
                      helpCenterUrl={helpCenterUrl}
                      helpCenterBtn={helpCenterBtn}
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

export default HelpCenter;
