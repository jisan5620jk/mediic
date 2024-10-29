import teamThumb from '/images/team5.jpg';
import teamThumb2 from '/images/team6.jpg';
import teamThumb3 from '/images/team7.jpg';
import teamThumb4 from '/images/team8.jpg';
import teamThumb5 from '/images/team9.jpg';
import teamThumb6 from '/images/team10.jpg';
import teamThumb7 from '/images/team11.jpg';
import teamThumb8 from '/images/team4.jpg';
import TeamInnerCard from './TeamInnerCard';
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Subscribe from '../../../Component1/Subscribe/Subscribe';

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: 'Connie Diaz',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Dentist',
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: 'James E. Huey',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Therapist',
  },
  {
    id: 3,
    teamThumb: teamThumb4,
    teamTitle: 'Alaina Rozy',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Medicine Expert',
  },
  {
    id: 4,
    teamThumb: teamThumb3,
    teamTitle: 'June D. Vargas',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Surjuon',
  },
  {
    id: 5,
    teamThumb: teamThumb5,
    teamTitle: 'David Miller',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Nuro Scientist',
  },
  {
    id: 6,
    teamThumb: teamThumb6,
    teamTitle: 'Merina Mario',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Nurse',
  },
  {
    id: 7,
    teamThumb: teamThumb7,
    teamTitle: 'Jone D. Alexon',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Heard Specialist',
  },
  {
    id: 8,
    teamThumb: teamThumb8,
    teamTitle: 'Mila Rahman',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Skin Specialist',
  },
];

const TeamInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Team Member'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Team Member'}
      />
      <section className='bg-BodyBg-0 bg-no-repeat bg-cover bg-center py-28 relative'>
        <div className='Container'>
          <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            {teamData.map(
              ({
                id,
                teamThumb,
                teamTitle,
                socialIcon,
                socialIcon2,
                socialIcon3,
                teamDesc,
              }) => {
                return (
                  <div key={id}>
                    <TeamInnerCard
                      teamThumb={teamThumb}
                      teamTitle={teamTitle}
                      socialIcon={socialIcon}
                      socialIcon2={socialIcon2}
                      socialIcon3={socialIcon3}
                      teamDesc={teamDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default TeamInner;
