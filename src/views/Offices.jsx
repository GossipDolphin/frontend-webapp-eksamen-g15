import React, { useState, useEffect } from 'react';
import { OfficesSection } from '../styles/StyledComponents';
import Banner from '../components/Banner';
import { OfficesCollectionSection } from '../components/OfficesCollectionSection';
import OfficesUiButtons from '../components/OfficesUiButtons';
import DetailedOffice from '../components/DetailedOffice';

const Offices = () => {
  const [officeList, setOfficeList] = useState([]);
  const [showListUi, setShowListUi] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [detailedOffice, setDetailedOffice] = useState(null);

  const generatedOfficeList = [
    { location: 'Fredrikstad', offices: [] },
    { location: 'Sarpsborg', offices: [] },
    { location: 'Moss', offices: [] },
    { location: 'Oslo', offices: [] },
  ];

  const generateOffices = () => {
    let nummer = 0;
    for (let i = 0; i < generatedOfficeList.length; i += 1) {
      let length = 5;
      if (i === 0 || i === 2) {
        length = 8;
      }
      for (let j = 0; j < length; j += 1) {
        generatedOfficeList[i].offices.push({
          city: generatedOfficeList[i].location,
          nummer,
          tlf: '69 99 00 00',
          epost: `${generatedOfficeList[i].location + nummer}@epost.no`,
        });
        nummer += 1;
      }
    }
    return generatedOfficeList;
  };
  useEffect(() => {
    setOfficeList(generateOffices);
  }, []);

  return (
    <OfficesSection>
      {detailedOffice === null ? (
        <>
          <Banner bannerTitle="Våre kontorer" />
          <OfficesUiButtons
            setShowListUi={setShowListUi}
            setFilterValue={setFilterValue}
            filterValue={filterValue}
          />
          {filterValue.length > 1
            ? officeList
                .filter((office) => office.location === filterValue)
                .map((office, index) => (
                  <OfficesCollectionSection
                    key={index}
                    location={office.location}
                    offices={office.offices}
                    showListUi={showListUi}
                    setDetailedOffice={setDetailedOffice}
                  />
                ))
            : officeList.map((office, index) => (
                <OfficesCollectionSection
                  key={index}
                  location={office.location}
                  offices={office.offices}
                  showListUi={showListUi}
                  setDetailedOffice={setDetailedOffice}
                />
              ))}
        </>
      ) : (
        <>
          <Banner bannerTitle={`Kontor Rørlegger ${detailedOffice.nummer}`} />
          <DetailedOffice
            detailedOffice={detailedOffice}
            setDetailedOffice={setDetailedOffice}
          />
        </>
      )}
    </OfficesSection>
  );
};

export default Offices;
