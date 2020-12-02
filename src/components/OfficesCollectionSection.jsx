import React from 'react';
import { OfficesCollectionGridStyled, OfficesCollectionListStyled } from "../styles/StyledComponents";
import OfficeCard from "./OfficeCard";
import OfficeListElement from "./OfficeListElement";

export const OfficesCollectionSection = ({ location, offices, showListUi, setDetailedOffice }) => {

    return (
        <>
            <h2>{location} ({offices.length} kontorer)</h2>
            {!showListUi ?
                <OfficesCollectionGridStyled>
                    {offices.map(office => {
                        return (
                            <OfficeCard key={office.nummer} office={office} setDetailedOffice={setDetailedOffice}></OfficeCard>
                        )
                    })}
                </OfficesCollectionGridStyled>
                : <OfficesCollectionListStyled>
                    {offices.map(office => {
                        return (
                            <OfficeListElement key={office.nummer} office={office} setDetailedOffice={setDetailedOffice}></OfficeListElement>
                        )
                    })}
                </OfficesCollectionListStyled>
            }
        </>
    )
}

export default OfficesCollectionSection;
