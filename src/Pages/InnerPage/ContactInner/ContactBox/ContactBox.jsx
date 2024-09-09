import { FaPhoneAlt } from "react-icons/fa";
import ContactBoxCard from "./ContactBoxCard";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

const processData = [
  {
    id: 1,
    contactBoxIcon: <FaPhoneAlt />,
    contactBoxSubTitle: "Call Us Anytime",
    contactBoxTitle: "+123 (4547) 563",
  },
  {
    id: 2,
    contactBoxIcon: <MdOutlineMail />,
    contactBoxSubTitle: "Send E-Mail",
    contactBoxTitle: "info@gmail.com",
  },
  {
    id: 3,
    contactBoxIcon: <AiOutlineClockCircle />,
    contactBoxSubTitle: "Opening Hours",
    contactBoxTitle: "Fri - Mon (9.00 - 5.00)",
  },
];

const ContactBox = () => {
  return (
    <section className="py-28 relative bg-[url(/images/about-bg.jpg)] z-10 ">
      <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {processData.map(
              ({
                id,
                contactBoxIcon,
                contactBoxSubTitle,
                contactBoxTitle,
              }) => {
                return (
                  <div key={id}>
                    <ContactBoxCard
                      contactBoxIcon={contactBoxIcon}
                      contactBoxSubTitle={contactBoxSubTitle}
                      contactBoxTitle={contactBoxTitle}
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

export default ContactBox;
