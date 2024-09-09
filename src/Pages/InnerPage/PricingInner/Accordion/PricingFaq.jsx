import { Link } from "react-router-dom";
import FaqAccordion from "./FaqAccordion";
import subTitleShape from "/images/sub-title-shape.png";
import buttonShape from "/images/button-shape-1.png";
import faqIcon from "/images/faq-icon.png";
import faqMainShape from "/images/faqs-shape2.png";

const Faq = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      faqIcon: faqIcon,
      title: "How to Cleaning Sea Beach Properly?",
      text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
      active: true,
    },
    {
      faqIcon: faqIcon,
      title: "How to save earth using trees?",
      text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
      active: false,
    },
    {
      faqIcon: faqIcon,
      title: "When Seedlings a Plants?",
      text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
      active: false,
    },
    {
      faqIcon: faqIcon,
      title: "Can I Donate money using Website?",
      text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
      active: false,
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-28 bg-[url('/images/faq-bg.jpg')] bg-cover bg-no-repeat
     bg-center"
    >
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src={faqMainShape}
              className="absolute -top-28 right-10 animate-movebtn"
            />
            <h5 className="font-FiraSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              FAQ
            </h5>
            <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-6">
              Freequently Asked <br />
              Questions
            </h1>
            <p className="font-FiraSans text-TextColor-0 font-light mb-9">
              {`Competently cultivate worldwide e-tailers through principle-centered professionally engineer high-payoff deliverables without exceptional processes. Rapidiously network cost effective vortals`}
            </p>
            <Link to={"/about"}>
              <button className="primary-btn">
                {`Learn More`}
                <img src={buttonShape} draggable="false" />
              </button>
            </Link>
          </div>
          <div className="w-full mx-auto">
            <div>
              {faqs.map((faq, index) => (
                <FaqAccordion
                  key={index}
                  faqIcon={faq.faqIcon}
                  title={faq.title}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </FaqAccordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
