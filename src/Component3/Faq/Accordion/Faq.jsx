import FaqAccordion from "./FaqAccordion";
import faqIcon from "/images/faq-icon.png";
import { MdCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";

const Faq = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      faqIcon: faqIcon,
      title: "#1 What is Technology service?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing awesom. Optio, neque qui velit. Magni dolorum quidem ipsam also as eligendi, totam, facilis laudantium.",
      active: true,
    },
    {
      faqIcon: faqIcon,
      title: "#2 How To Buy A Product?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing awesom. Optio, neque qui velit. Magni dolorum quidem ipsam also as eligendi, totam, facilis laudantium.",
      active: false,
    },
    {
      faqIcon: faqIcon,
      title: "#3 How Work The Support Policy?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing awesom. Optio, neque qui velit. Magni dolorum quidem ipsam also as eligendi, totam, facilis laudantium.",
      active: false,
    },
    {
      faqIcon: faqIcon,
      title: "#4 How Can Send A Refund Request?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing awesom. Optio, neque qui velit. Magni dolorum quidem ipsam also as eligendi, totam, facilis laudantium.",
      active: false,
    },
  ];

  return (
    <div className="Container">
      <section className="relative overflow-hidden bg-[#e6eefb] rounded-xl p-2 sm:p-5 md:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div className="bg-[#083c92] rounded-xl px-3 sm:px-[50px] pt-7 sm:pt-16 pb-8 sm:pb-[76px]">
            <h1 className="font-FiraSans font-bold text-2xl sm:text-3xl md:text-[38px] lg:text-3xl xl:text-[38px] text-white mb-5">
              Get Free Estimate
            </h1>
            <form action="#" method="post" className="flex flex-col gap-y-5">
              <div className="relative inline-block">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name*"
                  required
                  className="font-FiraSans text-white placeholder:text-white font-light bg-[#3a7ae4] border-none rounded py-2 px-6 h-[50px] w-full focus:outline-PrimaryColor-0"
                />
                <FaUser
                  size={"14"}
                  className="absolute text-white top-1/2 -translate-y-1/2 right-5"
                />
              </div>
              <div className="relative inline-block">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter E-Mail*"
                  required
                  className="font-FiraSans text-white placeholder:text-white font-light bg-[#3a7ae4] border-none rounded py-2 px-6 h-[50px] w-full focus:outline-PrimaryColor-0"
                />
                <HiOutlineMailOpen
                  size={"16"}
                  className="absolute text-white top-1/2 -translate-y-1/2 right-5"
                />
              </div>
              <div className="relative inline-block">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name*"
                  required
                  className="font-FiraSans text-white placeholder:text-white font-light bg-[#3a7ae4] border-none rounded py-2 px-6 h-[50px] w-full focus:outline-PrimaryColor-0"
                />
                <MdCall
                  size={"16"}
                  className="absolute text-white top-1/2 -translate-y-1/2 right-5"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write a short meassage..."
                className="font-FiraSans text-white placeholder:text-white font-light bg-[#3a7ae4] border-none rounded py-2 px-6 h-[120px] w-full focus:outline-PrimaryColor-0 resize-none"
              ></textarea>
              <button
                type="submit"
                className="primary-btn3 !justify-center !py-3"
              >
                Free Consultancy
              </button>
            </form>
          </div>
          <div className="relative w-full mx-auto">
            <h5 className="font-FiraSans text-[19px] font-semibold text-PrimaryColor-0 relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
              FAQ
            </h5>
            <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-12">
              Frequently Asked Any Kind <br />
              Of <span className="text-PrimaryColor-0">Questions</span>
            </h1>
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
      </section>
    </div>
  );
};

export default Faq;
