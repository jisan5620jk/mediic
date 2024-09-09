/* eslint-disable no-unused-vars */
import pricingShape1 from "/images/pricing-shape-1.png";
import pricingShape2 from "/images/pricing-shape-2.png";
import { FaCheck, FaCircle, FaStarOfLife } from "react-icons/fa6";
import PricingCard from "./PricingCard";

const pricingData = [
  {
    id: 1,
    currency: "$",
    price: 39,
    pricingDateLine: "Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Starter Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
  {
    id: 2,
    currency: "$",
    price: 59,
    pricingDateLine: "Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Standard Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
  {
    id: 3,
    currency: "$",
    price: 89,
    pricingDateLine: "Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Premium Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
];

const Pricing = () => {
  return (
    <section className="py-28 bg-[#f5f8ed]">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
            <FaStarOfLife />
            PRICING PLAN <FaStarOfLife />
          </h5>
          <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
            A Customizable Approach
            <br /> for Your Business
          </h1>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {pricingData.map(
              ({
                id,
                currency,
                price,
                pricingDateLine,
                pricingDesc,
                pricingTitle,
                pricingIcon,
                pricingContent1,
                pricingContent2,
                pricingContent3,
                pricingContent4,
                pricingUrl,
                pricingBtn,
                pricingShape1,
                pricingShape2,
              }) => {
                return (
                  <div key={id}>
                    <PricingCard
                      currency={currency}
                      price={price}
                      pricingDateLine={pricingDateLine}
                      pricingDesc={pricingDesc}
                      pricingTitle={pricingTitle}
                      pricingIcon={pricingIcon}
                      pricingContent1={pricingContent1}
                      pricingContent2={pricingContent2}
                      pricingContent3={pricingContent3}
                      pricingContent4={pricingContent4}
                      pricingUrl={pricingUrl}
                      pricingBtn={pricingBtn}
                      pricingShape1={pricingShape1}
                      pricingShape2={pricingShape2}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
