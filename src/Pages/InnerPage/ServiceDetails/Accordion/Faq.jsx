import FaqAccordion from './FaqAccordion';

const Faq = () => {
  //  All Faqs and  answers.
  const Faqs = [
    {
      faqNumber: '01',
      title: 'What if my patient does not have a matched sibling?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: false,
    },
    {
      faqNumber: '02',
      title: 'How is the Emergency Department staffed?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: false,
    },
    {
      faqNumber: '03',
      title: 'What all should I carry for my first appointment?',
      text: 'Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment. Dramatically architect go forward opportunities or premier to designer methods empowerment. Dramatically architect.',
      active: true,
    },
  ];

  return (
    <div className='w-full mx-auto'>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
      >
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
    </div>
  );
};

export default Faq;
