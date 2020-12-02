import React, { useState, useEffect } from 'react';
import { OfficesSection } from '../styles/StyledComponents';
import Banner from "../components/Banner";
import OfficesCollectionSection from "../components/OfficesCollectionSection";
import OfficesUiButtons from "../components/OfficesUiButtons";
import DetailedOffice from "../components/DetailedOffice";
import Footer from "../components/Footer"

const Offices = () => {
    const [officeList, setOfficeList] = useState([]);
    const [showListUi, setShowListUi] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [detailedOffice, setDetailedOffice] = useState(null);

    class Office {
        constructor(city, nummer, tlf, epost,) {
            this.city = city;
            this.nummer = nummer;
            this.tlf = tlf;
            this.epost = epost;
        }
    }
    const generatedOfficeList = [
        { "location": "Fredrikstad", "offices": [] },
        { "location": "Sarpsborg", "offices": [] },
        { "location": "Moss", "offices": [] },
        { "location": "Oslo", "offices": [] }
    ];

    const generateOffices = () => {
        let nummer = 0;
        for (let i = 0; i < generatedOfficeList.length; i++) {
            let length = 5
            if (i === 0 || i === 2) {
                length = 8;
            }
            for (let j = 0; j < length; j++) {
                generatedOfficeList[i].offices.push(new Office(generatedOfficeList[i].location, nummer, "69 99 00 00", generatedOfficeList[i].location + nummer + "@epost.no"));
                nummer++;
            }
        }
        return generatedOfficeList;
    }
    useEffect(() => {
        setOfficeList(generateOffices)
    }, [])

    return (
        <OfficesSection>{detailedOffice === null ?
            <>
                <Banner bannerTitle="Våre kontorer"></Banner>
                <OfficesUiButtons setShowListUi={setShowListUi} setFilterValue={setFilterValue} filterValue={filterValue}></OfficesUiButtons>
                {filterValue.length > 1 ? officeList.filter(office => office.location === filterValue).map(office => {
                    return (
                        <OfficesCollectionSection
                            location={office.location}
                            offices={office.offices}
                            showListUi={showListUi}
                            setDetailedOffice={setDetailedOffice}>
                        </OfficesCollectionSection>
                    )
                }) : officeList.map(office => {
                    return (
                        <OfficesCollectionSection
                            location={office.location}
                            offices={office.offices}
                            showListUi={showListUi}
                            setDetailedOffice={setDetailedOffice}></OfficesCollectionSection>
                    )
                })
                }
            </> :
            <>
            <Banner bannerTitle={"Kontor Rørlegger " + detailedOffice.nummer}></Banner>
            <DetailedOffice detailedOffice={detailedOffice} setDetailedOffice={setDetailedOffice}></DetailedOffice>
            </>}
            <Footer orgnr="007 007 007" email="lg@lgror.no" tlf="99 00 00 00"></Footer>
        </OfficesSection>
    )
}

export default Offices;