import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import subscribeIcon from '/images/bag.png';

const Subscribe = () => {
    return (
      <section className='bg-[url(/images/sbcribe-bg.jpg)] bg-cover bg-no-repeat bg-center py-14'>
        <div className='Container'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-7'>
              <div className="size-[120px] rounded-full flex items-center justify-center bg-white">
                <img
                  src={subscribeIcon}
                  draggable='false'
                />
              </div>
              <h3 className="font-AlbertSans font-bold text-[32px] text-white leading-[38px]">
                Since 2007 We’re working Medical <br /> group more than 1200+ Patient
              </h3>
            </div>
            <div>
              <Link to={'/contact'}>
                <button className='primary-btn mt-3 !border-white'>
                  Contact Us
                  <GoArrowRight
                    size={'22'}
                    className='-rotate-45'
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Subscribe;