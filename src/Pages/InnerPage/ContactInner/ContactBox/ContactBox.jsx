import ContactBoxCard from './ContactBoxCard';
import contactBoxIcon from '/images/icon-message.png';
import contactBoxIcon2 from '/images/icon-call.png';
import contactBoxIcon3 from '/images/icon-location.png';

const processData = [
  {
    id: 1,
    contactBoxIcon: contactBoxIcon,
    contactBoxSubTitle: 'Send Now',
    contactBoxTitle: 'E-Mail Address',
    contactBoxDesc: 'mediic@example.com',
  },
  {
    id: 2,
    contactBoxIcon: contactBoxIcon2,
    contactBoxSubTitle: 'Call us',
    contactBoxTitle: 'Phone Number',
    contactBoxDesc: '+123 (4547) 563',
  },
  {
    id: 3,
    contactBoxIcon: contactBoxIcon3,
    contactBoxSubTitle: 'Meet Us',
    contactBoxTitle: 'Location',
    contactBoxDesc: 'A-1, Envanto Headquarter, Australia',
  },
];

const ContactBox = () => {
  return (
    <section className='py-28 relative bg-BodyBg-0 z-10 '>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          {processData.map(
            ({
              id,
              contactBoxIcon,
              contactBoxSubTitle,
              contactBoxTitle,
              contactBoxDesc,
            }) => {
              return (
                <div
                  key={id}
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <ContactBoxCard
                    contactBoxIcon={contactBoxIcon}
                    contactBoxSubTitle={contactBoxSubTitle}
                    contactBoxTitle={contactBoxTitle}
                    contactBoxDesc={contactBoxDesc}
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
