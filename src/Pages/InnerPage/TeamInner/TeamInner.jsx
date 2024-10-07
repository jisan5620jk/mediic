import teamThumb from "/images/team5.jpg";
import teamThumb2 from "/images/team6.jpg";
import teamThumb3 from "/images/team7.jpg";
import teamThumb4 from "/images/team8.jpg";
import teamThumb5 from "/images/team9.jpg";
import teamThumb6 from "/images/team10.jpg";
import teamThumb7 from "/images/team11.jpg";
import teamThumb8 from "/images/team12.jpg";
import TeamInnerCard from "./TeamInnerCard";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Subscribe from "../../../Component1/Subscribe/Subscribe";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "Connie Diaz",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "CEO & Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: "James E. Huey",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Co Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 3,
    teamThumb: teamThumb4,
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "IT Expert",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 4,
    teamThumb: teamThumb3,
    teamTitle: "June D. Vargas",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Hr. Maneger",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 5,
    teamThumb: teamThumb5,
    teamTitle: "Connie Diaz",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "CEO & Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 6,
    teamThumb: teamThumb6,
    teamTitle: "James E. Huey",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Co Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 7,
    teamThumb: teamThumb7,
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "IT Expert",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 8,
    teamThumb: teamThumb8,
    teamTitle: "June D. Vargas",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Hr. Maneger",
    teamShareIcon: <IoShareSocialOutline />,
  },
];

const TeamInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Team Member"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Team Member"}
      />
      ;
      <section className="bg-BodyBg-0 bg-no-repeat bg-cover bg-center py-28 relative">
        <div className="Container">
          <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
            <div>
              <h5 className="font-AlbertSans text-lg font-semibold text-PrimaryColor-0">
                Dedicated Team
              </h5>
              <h1 className="font-AlbertSans font-bold text-xl leading-7 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
                Meet Our Dedicated Member <br />
                For Any Enquery
              </h1>
            </div>
            <div className="flex lg:justify-end">
              <Link to={"/about"}>
                <button className="primary-btn">
                  {`All Member`}
                  <GoArrowRight size={"22"} />
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[50px] mt-[52px]">
            {teamData.map(
              ({
                id,
                teamThumb,
                teamTitle,
                socialIcon,
                socialIcon2,
                socialIcon3,
                socialIcon4,
                teamDesc,
                teamShareIcon,
              }) => {
                return (
                  <div key={id}>
                    <TeamInnerCard
                      teamThumb={teamThumb}
                      teamTitle={teamTitle}
                      socialIcon={socialIcon}
                      socialIcon2={socialIcon2}
                      socialIcon3={socialIcon3}
                      socialIcon4={socialIcon4}
                      teamDesc={teamDesc}
                      teamShareIcon={teamShareIcon}
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
