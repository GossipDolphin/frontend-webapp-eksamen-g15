import React from 'react';
import {
  OfficesCollectionGridStyled,
  OfficesCollectionListStyled,
} from '../styles/StyledComponents';
import OfficeCard from './OfficeCard';
import OfficeListElement from './OfficeListElement';

export const OfficesCollectionSection = ({
  location,
  offices,
  showListUi,
  setDetailedOffice,
}) => (
  <>
    <h2>
      {location} ({offices.length} kontorer)
    </h2>
    {!showListUi ? (
      <OfficesCollectionGridStyled>
        {offices.map((office) => (
          <OfficeCard
            key={office.nummer}
            office={office}
            setDetailedOffice={setDetailedOffice}
          />
        ))}
      </OfficesCollectionGridStyled>
    ) : (
      <OfficesCollectionListStyled>
        {offices.map((office) => (
          <OfficeListElement
            key={office.nummer}
            office={office}
            setDetailedOffice={setDetailedOffice}
          />
        ))}
      </OfficesCollectionListStyled>
    )}
  </>
);

export default OfficesCollectionSection;
