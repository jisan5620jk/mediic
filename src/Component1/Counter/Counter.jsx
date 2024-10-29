import CountUp from 'react-countup';
import counterImg from '/images/counter-img.png';

const Counter = () => {
  return (
    <div className='bg-BodyBg-0 px-2 lg:px-[30px]'>
      <section className='rounded-b-[30px] pt-[74px] pb-[54px] bg-[url(/images/counter-bg.png)] bg-no-repeat bg-cover bg-center'>
        <div className='Container'>
          <div className='grid gap-7 grid-cols-12 lg:items-center lg:justify-center'>
            <div className='col-span-12 md:col-span-12 lg:col-span-7'>
              <div className='flex items-center gap-6'>
                <div
                  className='hidden sm:block lg:hidden xl:block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                >
                  <img
                    src={counterImg}
                    draggable='false'
                  />
                </div>
                <h2
                  className='font-AlbertSans font-bold text-white text-2xl sm:text-2xl md:text-[34px] sm:leading-[40px]'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Medical Achivement <br /> Health Protection
                </h2>
              </div>
            </div>
            <div className='col-span-12 md:col-span-12 lg:col-span-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-4 xl:gap-20'>
                <div
                  data-aos='fade-down'
                  data-aos-duration='1000'
                >
                  <div>
                    <CountUp
                      start={-11}
                      end={'12'}
                      suffix={'K+'}
                      className='font-AlbertSans text-3xl sm:text-4xl md:text-[50px] text-white font-bold'
                    />
                  </div>
                  <p className='font-AlbertSans font-medium text-xl lg:text-lg xl:text-xl text-white pt-3 mt-3 border-t-2 border-BorderColor-0 border-opacity-25'>
                    Satisfied Patients
                  </p>
                </div>
                <div
                  data-aos='fade-left'
                  data-aos-duration='1000'
                >
                  <div>
                    <CountUp
                      start={-11}
                      end={'100'}
                      suffix={'%'}
                      className='font-AlbertSans text-3xl sm:text-4xl md:text-[50px] text-white font-bold'
                    />
                  </div>
                  <p className='font-AlbertSans font-medium text-xl lg:text-lg xl:text-xl text-white pt-3 mt-3 border-t-2 border-BorderColor-0 border-opacity-25'>
                    Satisfaction Rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
