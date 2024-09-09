/* eslint-disable react/prop-types */
const ContactBoxCard = ({
  contactBoxIcon,
  contactBoxTitle,
  contactBoxSubTitle,
}) => {
  return (
    <div className="group px-[30px] py-6 rounded-md flex items-center gap-5 border border-PrimaryColor-0 bg-white relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="size-[64px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white">
        {contactBoxIcon}
      </div>
      <div className="flex-1">
        <h5 className="font-FiraSans font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2">
          {contactBoxSubTitle}
        </h5>
        <p className="font-FiraSans text-PrimaryColor-0 font-semibold text-2xl transition-all duration-500 group-hover:text-white">
          {contactBoxTitle}
        </p>
      </div>
    </div>
  );
};

export default ContactBoxCard;
