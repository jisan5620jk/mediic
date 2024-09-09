import teamThumb from "/images/team1.jpg";
import teamThumb2 from "/images/team2.jpg";
import teamThumb3 from "/images/team3.jpg";
import teamThumb4 from "/images/team4.jpg";
import TeamCard from "./TeamCard";
import { FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";

const TeamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "Anjelina Watson",
    teamDesc: "Web Developer",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: "Jhon D. Alexon",
    teamDesc: "IT Specialist",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: "Al-Amin Islam",
    teamDesc: "Graphic Designer",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamTitle: "Ricerd Powel",
    teamDesc: "Marketing",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
];

const TeamMember = () => {
  return (
    <section className="pb-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            TEAM MEMBER
          </h5>
          <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
            Meet With Our <span className="text-PrimaryColor-0">Engineer</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-20 mt-12">
          {TeamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              teamDesc,
              socialIcon,
              socialIcon2,
              socialIcon3,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    teamDesc={teamDesc}
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
