import teamThumb from '/images/team.jpg';
import teamThumb2 from '/images/team2.jpg';
import teamThumb3 from '/images/team3.jpg';
import TeamCard from './TeamCard';
import CountUp from 'react-countup';
import circleShape from '/images/crcle-bg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: 'Merina M. Banty',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamSubTitle: 'Dentist',
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: 'Jone D. Alexon',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamSubTitle: 'Therapist',
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: 'Jisan Khan',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamSubTitle: 'Psychologist',
  },
  {
    id: 4,
    teamThumb: teamThumb2,
    teamTitle: 'James E. Huey',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamSubTitle: 'Dentist',
  },
];

const TeamMember = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    centeredSlides: true,
    autoplay: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className='team-members pb-28 relative z-10 bg-BodyBg-0 overflow-hidden pt-[106px]'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-8 md:items-center md:grid-cols-2 border-b border-BorderColor3-0 pb-7'>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Meet Our Best <br />
              Doctors
            </h1>
          </div>
          <div
            className='flex md:justify-end'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='flex items-center gap-8 '>
              <div>
                <CountUp
                  start={-11}
                  end={'58'}
                  suffix={'+'}
                  className='font-AlbertSans text-3xl sm:text-4xl md:text-[60px] leading-[50px] text-HeadingColor-0 font-bold'
                />
              </div>
              <p className='font-AlbertSans font-medium text-lg text-HeadingColor-0 uppercase'>
                Top Expert <br /> Doctors
              </p>
            </div>
          </div>
        </div>
        <div
          className='mt-10'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <Swiper
            {...settings}
            pagination={pagination}
            modules={[EffectCoverflow, Pagination]}
          >
            {teamData.map(
              ({
                id,
                teamThumb,
                teamTitle,
                socialIcon,
                socialIcon2,
                socialIcon3,
                socialIcon4,
                teamSubTitle,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className='pb-[60px] pt-5'>
                      <TeamCard
                        teamThumb={teamThumb}
                        teamTitle={teamTitle}
                        socialIcon={socialIcon}
                        socialIcon2={socialIcon2}
                        socialIcon3={socialIcon3}
                        socialIcon4={socialIcon4}
                        teamSubTitle={teamSubTitle}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
      <div className='absolute -z-10 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2'>
        <img
          src={circleShape}
          draggable='false'
          className='max-w-[inherit] w-[inherit]'
        />
      </div>
    </section>
  );
};

export default TeamMember;
