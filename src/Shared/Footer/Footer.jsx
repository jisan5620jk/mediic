import { Link } from 'react-router-dom';
import footerLogo from '/images/logo2.png';
import footerShape from '/images/footer-img-1.png';
import footerShape2 from '/images/footer-img-2.png';
import { FaAnglesRight, FaInstagram, FaPinterestP } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-Secondarycolor-0 relative z-10 pt-28 overflow-hidden'>
      <div className='absolute -top-2 -left-11 -z-10 hidden 2xl:block'>
        <img
          src={footerShape}
          draggable='false'
        />
      </div>
      <div className='Container'>
        <div className='grid gap-y-7 grid-cols-12'>
          <div className='col-span-12 md:col-span-6 lg:col-span-5'>
            <div className='inline-block'>
              <Link
                to={'/'}
                title='Mediic'
              >
                <img
                  src={footerLogo}
                  draggable={false}
                />
              </Link>
            </div>
            <p className='font-AlbertSans xl:text-lg 2xl:text-xl font-medium text-white mt-[52px] mb-7'>
              Completely promote interdependent systems for{' '}
              <br className='hidden sm:block' /> Latest update news this
              Medical.
            </p>
            <form
              action='#'
              method='post'
              className='relative w-11/12'
            >
              <label
                htmlFor='email'
                className='relative'
              >
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your E-Mail*'
                  required
                  className='w-full h-[54px] outline-none text-lg font-DMSans border-b-2 border-BorderColor2-0 bg-transparent py-3 text-white placeholder:text-TextColor-0 mb-4'
                />
              </label>
              <div className='absolute top-3 right-0'>
                <button
                  type='submit'
                  className='text-white'
                >
                  <MdOutlineArrowOutward size={'28'} />
                </button>
              </div>
              <label
                htmlFor='checkbox'
                className='font-DMSans text-TextColor-0 inline-block gap-2 cursor-pointer'
              >
                <input
                  type='checkbox'
                  id='checkbox'
                  name='checkbox'
                  className='mr-2'
                />
                Agree Terms & Conditions
              </label>
            </form>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='font-AlbertSans text-2xl text-white font-semibold mb-[31px]'>
              Company
            </h4>
            <ul className='overflow-hidden'>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px]'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px]'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px]'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Service
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px]'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='font-AlbertSans text-2xl text-white font-semibold mb-[31px]'>
              Useful Links
            </h4>
            <ul className='overflow-hidden'>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px]'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Partner
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px]'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Appointment
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px]'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Testimonial
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px]'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Privacy
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium -ml-5 hover:ml-0 text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    FAQ
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-AlbertSans text-2xl text-white font-semibold mb-[31px]'>
              Contact
            </h4>
            <p className='font-AlbertSans font-medium text-TextColor-0'>
              102/ B Street, New Elephant Road,
              <br className='hidden 2xl:block' /> Sandigo, USA
            </p>
            <h5 className='font-AlbertSans font-medium text-white text-xl mt-6 mb-1'>
              E-Mail Us
            </h5>
            <Link to={'/'}>
              <button className='font-AlbertSans text-TextColor-0 transition-all duration-500 hover:text-PrimaryColor-0'>
                example@gmail.com
              </button>
            </Link>
            <h5 className='font-AlbertSans font-medium text-white text-xl mt-6 mb-[6px]'>
              Call Now
            </h5>
            <Link to={'/'}>
              <button className='font-AlbertSans text-TextColor-0 transition-all duration-500 hover:text-PrimaryColor-0'>
                +880 123 (4567) 890
              </button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-7 mt-28 border-t border-BorderColor2-0'>
          <div>
            <ul className='flex gap-4 sm:gap-8'>
              <li>
                <button className='transition-all duration text-white hover:text-PrimaryColor-0'>
                  <FaFacebookF size={'20'} />
                </button>
              </li>
              <li>
                <button className='transition-all duration text-white hover:text-PrimaryColor-0'>
                  <FaLinkedinIn size={'20'} />
                </button>
              </li>
              <li>
                <button className='transition-all duration text-white hover:text-PrimaryColor-0'>
                  <FaInstagram size={'20'} />
                </button>
              </li>
              <li>
                <button className='transition-all duration text-white hover:text-PrimaryColor-0'>
                  <FaPinterestP size={'20'} />
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-DMSans flex items-center text-TextColor-0'>
              This is a sample website - Mediic © 2024 - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 -right-2 -z-10 hidden 2xl:block'>
        <img
          src={footerShape2}
          draggable='false'
        />
      </div>
    </footer>
  );
};

export default Footer;
