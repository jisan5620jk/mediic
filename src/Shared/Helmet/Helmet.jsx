/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Mediic - {title}</title>
    </Helmet>
  );
};

export default HelmetChanger;
