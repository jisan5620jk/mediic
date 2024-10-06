/* eslint-disable react/prop-types */
const ContactBoxCard = ({
  contactBoxIcon,
  contactBoxTitle,
  contactBoxSubTitle,
  contactBoxDesc,
}) => {
  return (
    <div className='group px-9 pt-10 pb-8 rounded-3xl border-2 border-white bg-white hover:border-PrimaryColor-0 transition-all duration-500 bg-opacity-20 relative z-10'>
      <div className='flex items-center justify-between pb-20'>
        <h6 className="font-DMSans font-medium text-TextColor2-0 uppercase">{contactBoxSubTitle}</h6>
        <div className='size-[70px] rounded-full border-2 border-white bg-white bg-opacity-20 flex justify-center items-center'>
          <img
            src={contactBoxIcon}
            draggable='false'
          />
        </div>
      </div>
      <h5 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 mb-1 pt-2'>
        {contactBoxTitle}
      </h5>
      <p className='font-AlbertSans text-TextColor2-0'>
        {contactBoxDesc}
      </p>
    </div>
  );
};

export default ContactBoxCard;
