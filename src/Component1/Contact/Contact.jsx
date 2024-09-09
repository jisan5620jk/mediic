/* eslint-disable no-unused-vars */
import { FaPhoneAlt } from "react-icons/fa";
import ContactCard from "./ContactCard";
import { HiOutlineMail } from "react-icons/hi";
import { LuClock4 } from "react-icons/lu";

const processData = [
  {
    id: 1,
    contactIcon: <FaPhoneAlt />,
    contactSubTitle: "Call Us  Anytime",
    contactTitle: "+123 (4567) 890",
  },
  {
    id: 2,
    contactIcon: <HiOutlineMail />,
    contactSubTitle: "Send E-Mail",
    contactTitle: "info@gmail.com",
  },
  {
    id: 3,
    contactIcon: <LuClock4 />,
    contactSubTitle: "Opening Hours",
    contactTitle: "Mon - Fri (8.00 - 5.00",
  },
];

const Contact = () => {
  return (
    <section className="py-[120px] bg-[url('/images/contact-info-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
          {processData.map(
            ({ id, contactIcon, contactSubTitle, contactTitle }) => {
              return (
                <div key={id}>
                  <ContactCard
                    contactIcon={contactIcon}
                    contactSubTitle={contactSubTitle}
                    contactTitle={contactTitle}
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

export default Contact;
