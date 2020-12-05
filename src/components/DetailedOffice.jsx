import React from 'react';
import { DetailedOfficeSection } from '../styles/StyledComponents';
import Welcome from './Welcome';
import Employees from './Employees';
import Banner from './Banner';

const DetailedOffice = ({ detailedOffice, setDetailedOffice }) => (
  <DetailedOfficeSection>
    <Welcome
      nummer={detailedOffice.nummer}
      setDetailedOffice={setDetailedOffice}
    />
    <Employees />
    <Banner bannerTitle={`kontakt oss på ${detailedOffice.tlf}`} />
  </DetailedOfficeSection>
);

export default DetailedOffice;
