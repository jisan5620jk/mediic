/* eslint-disable react/prop-types */
const ContactCard = ({ contactIcon, contactSubTitle, contactTitle }) => {
  return (
    <div className="group flex items-center gap-4 sm:gap-6 bg-white p-4 sm:p-8 lg:p-4 xl:p-8 border border-PrimaryColor-0 rounded overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
      <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center text-2xl border-2 border-PrimaryColor-0 text-PrimaryColor-0 transition-all duration-500 group-hover:border-white group-hover:text-white">
        {contactIcon}
      </div>
      <div className="flex-1">
        <h6 className="font-FiraSans font-semibold text-lg text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
          {contactSubTitle}
        </h6>
        <h4 className="font-FiraSans font-semibold text-xl sm:text-[22px] lg:text-xl xl:text-[22px] 2xl:text-[26px] text-PrimaryColor-0 transition-all duration-500 group-hover:text-white mt-[2px]">
          {contactTitle}
        </h4>
      </div>
    </div>
  );
};

export default ContactCard;
