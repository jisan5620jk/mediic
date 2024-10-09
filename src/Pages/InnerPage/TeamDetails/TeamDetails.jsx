import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import TeamDetailsMain from './TeamDetailsMain';
import Subscribe from '../../../Component1/Subscribe/Subscribe';

const TeamDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Team Details'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Team Details'}
      />
      <TeamDetailsMain />
      <Subscribe />
    </>
  );
};

export default TeamDetails;
