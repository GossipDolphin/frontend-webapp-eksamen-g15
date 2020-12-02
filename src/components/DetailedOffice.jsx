import React from 'react';
import {DetailedOfficeSection} from "../styles/StyledComponents";
import Welcome from "../components/Welcome";
import Employees from "../components/Employees"

const DetailedOffice = ({detailedOffice}) => {

    return(
        <DetailedOfficeSection>
            <Welcome nummer={detailedOffice.nummer}></Welcome>
            <Employees></Employees>
        </DetailedOfficeSection>
    )
}

export default DetailedOffice;