import React from 'react';
import { OfficeCardStyled } from '../styles/StyledComponents';

export const OfficeCard = ({ office, setDetailedOffice }) => {
  const handleClick = () => {
    setDetailedOffice(office);
  };
  return (
    <OfficeCardStyled onClick={handleClick}>
      <p>Rørlegger {office.nummer}</p>
      <p>
        Rørleggerveien {office.nummer} {office.city}
      </p>
      <p>{office.tlf}</p>
      <p>{office.epost}</p>
    </OfficeCardStyled>
  );
};

export default OfficeCard;
