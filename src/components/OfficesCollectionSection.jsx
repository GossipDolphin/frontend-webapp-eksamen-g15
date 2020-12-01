import React from 'react';
import { OfficesCollectionGridStyled } from "../styles/StyledComponents";
import OfficeCard from "../components/OfficeCard";

export const OfficesCollectionSection = ({ location, offices }) => {
    return (
        <>
            <h1>{location}</h1>
            <OfficesCollectionGridStyled>
                {offices.map(office => {
                    return (
                        <OfficeCard office={office}></OfficeCard>
                    )
                })};
        </OfficesCollectionGridStyled>
        </>
    )
}

export default OfficesCollectionSection;
