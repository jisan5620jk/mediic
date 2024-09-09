import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const PricingAccordion = ({ children, faqIcon, title, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="mb-5 rounded-md overflow-hidden">
      <h2>
        <button
          className="faq-button2 rounded-md flex items-center justify-between pl-4 pr-2 md:pl-7 md:pr-6 lg:pl-6 lg:pr-4 xl:pl-7 xl:pr-6 py-5 w-full text-left font-medium font-FiraSans transition-all duration-500 group bg-[#cedef7] border-b border-transparent"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-HeadingColor-0 transition !leading-5 duration-400 text-base sm:text-lg md:text-lg lg:text-base xl:text-lg flex items-center gap-4 ${
              accordionOpen && "!text-HeadingColor-0"
            }`}
          >
            <img src={faqIcon} className="size-5 transition-all duration-500" />
            <span className="">{title}</span>
          </span>
          <FaAngleDown
            className={`text-HeadingColor-0 bg-transparent transition duration-400 ${
              accordionOpen && " !text-HeadingColor-0 rotate-180"
            }`}
          />
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid font-FiraSans leading-[26px] text-TextColor2-0 bg-[#cedef7] px-4 md:px-7 lg:px-6 xl:px-7 overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pt-6 text-sm sm:text-base font-FiraSans">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingAccordion;
