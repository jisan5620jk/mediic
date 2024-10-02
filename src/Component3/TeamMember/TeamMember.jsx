import teamShape from '/images/doctor-set.png';
import teamThumb from "/images/team.png";
import teamThumb2 from "/images/team2.png";
import teamThumb3 from "/images/team3.png";
import teamThumb4 from "/images/team4.png";
import TeamCard from "./TeamCard";
import { FaCircle, FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { LuCornerUpRight } from 'react-icons/lu';
import circleShape from '/images/crcle-bg.png';

const TeamData = [
  {
    id: 1,
    teamShape: teamShape,
    teamThumb: teamThumb,
    teamTitle: 'Dr. Ricard Melt',
    teamDesc: 'Physician',
    teamIcon: <LuCornerUpRight />,
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 2,
    teamShape: teamShape,
    teamThumb: teamThumb2,
    teamTitle: 'Dr. Anjelina Joli',
    teamDesc: 'Surjoun',
    teamIcon: <LuCornerUpRight />,
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 3,
    teamShape: teamShape,
    teamThumb: teamThumb3,
    teamTitle: 'Dr. Samuel Whatson',
    teamDesc: 'Arthopedis',
    teamIcon: <LuCornerUpRight />,
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 4,
    teamShape: teamShape,
    teamThumb: teamThumb4,
    teamTitle: 'Dr. Nadira Khan',
    teamDesc: 'Dentist',
    teamIcon: <LuCornerUpRight />,
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
];

const TeamMember = () => {
  return (
    <section className='py-28 overflow-hidden relative z-10 bg-gradient-to-t from-BodyBg-0 to-80% from-25% rounded-b-[30px] mx-2 xl:mx-6 2xl:mx-10'>
      <div className='absolute -z-10 top-16 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <img
          src={circleShape}
          draggable='false'
          className='max-w-[inherit] w-[inherit]'
        />
      </div>
      <div className='Container'>
        <div className='text-center'>
          <div className='inline-block mb-5'>
            <h6 className='flex items-center justify-start gap-2 bg-white bg-opacity-30 text-PrimaryColor-0 text-[15px] font-semibold border border-white border-opacity-60 rounded-full font-AlbertSans px-[22px] py-2 uppercase'>
              <FaCircle size={'8'} />
              EXPERT OUR DOCTOR
            </h6>
          </div>
          <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-[20px] leading-[28px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[46px] xl:leading-[57px] 2xl:text-[55px] 2xl:leading-[67px]'>
            Explore Our Team
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-20 mt-12'>
          {TeamData.map(
            ({
              id,
              teamShape,
              teamThumb,
              teamTitle,
              teamDesc,
              teamIcon,
              socialIcon,
              socialIcon2,
              socialIcon3,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamShape={teamShape}
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    teamDesc={teamDesc}
                    teamIcon={teamIcon}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
