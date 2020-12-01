import React, { useState } from 'react';
import { OfficesSection } from '../styles/StyledComponents'
import Banner from "../components/Banner";
import OfficesCollectionSection from "../components/OfficesCollectionSection"

const Offices = () => {

    class Office {
        constructor(city, nummer, tlf, epost,) {
            this.city = city;
            this.nummer = nummer;
            this.tlf = tlf;
            this.epost = epost;
        }
    }
    const [officeList, setOfficeList] = useState([]);
    const generatedOfficeList = [
        { "location": "Fredrikstad", "offices": [] },
        { "location": "Sarpsborg", "offices": [] },
        { "location": "Moss", "offices": [] },
        { "location": "Oslo", "offices": [] }
    ];

    const generateOffices = () => {
        for (let i = 0; i < generatedOfficeList.length; i++) {
            for (let j = 0; j < 6; j++) {
                generatedOfficeList[i].offices.push(new Office(generatedOfficeList[i].location, i + "" + j, "69 99 00 00", generatedOfficeList[i].location + i + "" + j + "@epost.no"));
            }
        }
        return generatedOfficeList;
    }

    return (

        <OfficesSection>
            <Banner bannerTitle="Våre kontorer"></Banner>
            {generateOffices().map(office => {
                return (
                    <OfficesCollectionSection location={office.location} offices={office.offices}></OfficesCollectionSection>
                )
            })}
        </OfficesSection>
    )
}

export default Offices;