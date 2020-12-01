import React from 'react';
import { OfficesCollectionGridStyled } from "../styles/StyledComponents";
import OfficeCard from "../components/OfficeCard";

export const OfficesCollectionSection = ({ location, offices }) => {
    return (
        <>
            <h2>{location} ({offices.length} kontorer)</h2>
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
