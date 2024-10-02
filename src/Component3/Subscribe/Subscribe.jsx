import { Link } from 'react-router-dom';
import subscribeIcon from '/images/subscribe.png';
import { LiaPhoneSolid } from 'react-icons/lia';

const Subscribe = () => {
  return (
    <section className='bg-[url(/images/sbcribe-bg.jpg)] bg-cover bg-no-repeat bg-center py-10 mx-2 xl:mx-10 rounded-b-[30px] relative z-20 -mb-[52px]'>
      <div className='Container'>
        <div className='flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center gap-6 lg:gap-0'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-7'>
            <div>
              <img
                src={subscribeIcon}
                draggable='false'
              />
            </div>
            <h3 className='font-AlbertSans font-semibold text-2xl sm:text-[28px] text-white'>
              Elevating Customer Experience.
            </h3>
          </div>
          <div className='flex items-center gap-3 sm:gap-10'>
            <div className='size-[70px] rounded-full flex items-center justify-center text-white bg-[#1b8bff]'>
              <LiaPhoneSolid className='text-4xl' />
            </div>
            <Link
              to={'/service_details'}
              className='inline-block relative'
            >
              <button className='primary-btn3'>
                +44 920 090 505 <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
