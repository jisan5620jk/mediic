import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const PricingAccordion = ({ children, title,faqNumber, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <div className='mb-5 rounded-md overflow-hidden'>
      <h2>
        <button
          className='faq-button rounded-2xl flex items-center justify-between pl-4 pr-2 md:pl-7 md:pr-6 lg:pl-6 lg:pr-4 xl:pl-7 xl:pr-6 py-2 w-full text-left font-medium font-AlbertSans hover:bg-Secondarycolor-0 transition-all duration-500 group bg-white bg-opacity-25 border-2 border-white border-opacity-80'
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-HeadingColor-0 transition !leading-5 duration-500 group-hover:text-white text-base sm:text-lg md:text-xl lg:text-base xl:text-xl flex items-center gap-4 ${
              accordionOpen && '!text-white'
            }`}
          >
            <span>{faqNumber}</span>
            <span className='border-l-2 border-BorderColor2-0 pl-4'>
              {title}
            </span>
          </span>
          <div
            className={`size-10 rounded-full flex items-center justify-center bg-white bg-opacity-25 border-2 border-white border-opacity-80 ${
              accordionOpen && ' !border-PrimaryColor-0 !bg-PrimaryColor-0'
            }`}
          >
            <FaAngleDown
              className={`text-HeadingColor-0 text-lg transition duration-400 group-hover:text-white ${
                accordionOpen && ' !text-white rotate-180'
              }`}
            />
          </div>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role='region'
        aria-labelledby={`accordion-title-${id}`}
        className={`grid font-AlbertSans leading-[26px] text-TextColor2-0 bg-transparent px-4 md:px-7 lg:px-6 xl:px-7 overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden'>
          <p className='pb-6 pt-6 text-sm sm:text-base font-AlbertSans'>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingAccordion;