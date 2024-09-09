/* eslint-disable no-unused-vars */
import testiImg from "/images/testi-author1.png";
import testiImg2 from "/images/testi-author2.png";
import testiImg3 from "/images/testi-author3.png";
import testiImg4 from "/images/testi-author-4.png";
import testiImg5 from "/images/testi-author-5.png";
import testiImg6 from "/images/testi-author-6.png";
import testiShape from "/images/testi-quote-6.png";
import subTitleShape from "/images/sub-title-shape.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialInnerCard from "./TestimonialInnerCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { FaArrowRightLong } from "react-icons/fa6";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiTitle: "Support",
    testiShape: testiShape,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "UI/UX Designer",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiTitle: "Service Quality",
    testiShape: testiShape,
  },
  {
    id: 3,
    testiImg: testiImg3,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Tina Rose",
    testiDesignation: "Zoo Visitors",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiTitle: "Support",
    testiShape: testiShape,
  },
  {
    id: 4,
    testiImg: testiImg4,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "David Miller",
    testiDesignation: "Volunteer",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiTitle: "Service Quality",
    testiShape: testiShape,
  },
  {
    id: 5,
    testiImg: testiImg5,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jisan Khan",
    testiDesignation: "Zoo Visitors",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiTitle: "Support",
    testiShape: testiShape,
  },
  {
    id: 6,
    testiImg: testiImg6,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Marina M.Cullam",
    testiDesignation: "Web Developer",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiTitle: "Service Quality",
    testiShape: testiShape,
  },
];

const TestimonialInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Testimonial"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Testimonial"}
      />
      <section className="py-28 bg-[#f5f8ed] relative z-10 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:-z-10 before:h-2/3 before:bg-[url('/images/map.png')] before:bg-center before:bg-cover before:bg-no-repeat overflow-hidden testimonial">
        <div className="Container">
          <div className="text-center">
            <h5 className="font-FiraSans font-medium text-PrimaryColor-0 flex items-center gap-2 justify-center">
              <img src={subTitleShape} draggable="false" />
              TESTIMONIALS
            </h5>
            <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
              Clients Best Feedback About
              <br />
              Echofy Provission
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[56px]">
            {testiData.map(
              ({
                id,
                testiImg,
                testiRatingIcon,
                testiName,
                testiDesignation,
                testiDesc,
                testiTitle,
                testiShape,
              }) => {
                return (
                  <div key={id}>
                    <TestimonialInnerCard
                      testiImg={testiImg}
                      testiRatingIcon={testiRatingIcon}
                      testiName={testiName}
                      testiDesignation={testiDesignation}
                      testiDesc={testiDesc}
                      testiTitle={testiTitle}
                      testiShape={testiShape}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialInner;
