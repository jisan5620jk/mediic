import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import FaqAccordion from './FaqAccordion';

const FaqInner = () => {
  //  All Faqs and  answers.
  const Faqs = [
    {
      title: 'What if my patient does not have a matched sibling?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: true,
    },
    {
      title: 'How is the Emergency Department staffed?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: false,
    },
    {
      title: 'What all should I carry for my first appointment?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: false,
    },
  ];

  const Faqs2 = [
    {
      title: 'What Medical Services Do You Provide?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: true,
    },
    {
      title: 'What is your customer geography?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: false,
    },
    {
      title: 'What are the main industries we serve?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: false,
    },
  ];

  const Faqs3 = [
    {
      title:
        'Do you provide product support services after the app development is complete?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: true,
    },
    {
      title:
        'What is the budget generally needed? How do you estimate the cost of a software project?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: false,
    },
    {
      title:
        'I’m not sure what kind of application development services I need. What should I do?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: false,
    },
  ];

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"F.A.Q's"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'F.a.q'}
      />
      <section className='bg-BodyBg-0 py-28'>
        <div className='Container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div>
                <h3 className='font-AlbertSans text-HeadingColor-0 font-bold text-[28px]'>
                  General Questions
                </h3>
                <p className='font-DMSans font-medium text-TextColor2-0 pt-5 pb-12'>
                  Alternative innovation network environmental whiteboard pursue
                  for premier methods empowerment go forward opportunities
                </p>
              </div>
              {Faqs.map((faq, index) => (
                <FaqAccordion
                  key={index}
                  title={faq.title}
                  faqNumber={faq.faqNumber}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </FaqAccordion>
              ))}
            </div>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div>
                <h3 className='font-AlbertSans text-HeadingColor-0 font-bold text-[28px]'>
                  Other{`'s`} Questions
                </h3>
                <p className='font-DMSans font-medium text-TextColor2-0 pt-5 pb-12'>
                  Alternative innovation network environmental whiteboard pursue
                  for premier methods empowerment go forward opportunities
                </p>
              </div>
              {Faqs2.map((faq, index) => (
                <FaqAccordion
                  key={index}
                  title={faq.title}
                  faqNumber={faq.faqNumber}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </FaqAccordion>
              ))}
            </div>
          </div>
          <div
            className='pt-28'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div>
              <h3 className='font-AlbertSans text-HeadingColor-0 font-bold text-[28px]'>
                Happy to Answer All Your Questions
              </h3>
              <p className='font-DMSans font-medium text-TextColor2-0 pt-5 pb-12'>
                Alternative innovation network environmental whiteboard pursue
                for premier <br /> methods empowerment go forward opportunities
              </p>
            </div>
            {Faqs3.map((faq, index) => (
              <FaqAccordion
                key={index}
                title={faq.title}
                faqNumber={faq.faqNumber}
                id={`faqs-${index}`}
                active={faq.active}
              >
                {faq.text}
              </FaqAccordion>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqInner;
