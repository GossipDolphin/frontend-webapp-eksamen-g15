import React from 'react';
import { OfficeListElementStyled } from '../styles/StyledComponents';

export const OfficeListElement = ({ office, setDetailedOffice }) => {
  const handleClick = () => {
    setDetailedOffice(office);
  };
  return (
    <OfficeListElementStyled onClick={handleClick}>
      <p>{office.nummer}</p>
      <p>Rørlegger {office.nummer}</p>
      <p>Rørleggerveien {office.nummer}</p>
      <p>{office.tlf}</p>
      <p>{office.epost}</p>
    </OfficeListElementStyled>
  );
};

export default OfficeListElement;
