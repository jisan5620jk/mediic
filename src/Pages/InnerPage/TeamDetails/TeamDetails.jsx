import {
  FaArrowRightLong,
} from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import TeamDetailsMain from "./TeamDetailsMain";


const TeamDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Team Member"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Team Member"}
      />
      <TeamDetailsMain />
    </>
  );
};

export default TeamDetails;


