import React from 'react';
import {DetailedOfficeSection} from "../styles/StyledComponents";
import Welcome from "../components/Welcome";
import Employees from "../components/Employees"
import Banner from "../components/Banner";

const DetailedOffice = ({detailedOffice, setDetailedOffice}) => {

    return(
        <DetailedOfficeSection>
            <Welcome nummer={detailedOffice.nummer} setDetailedOffice={setDetailedOffice}></Welcome>
            <Employees></Employees>
            <Banner bannerTitle={"kontakt oss på " + detailedOffice.tlf}></Banner>
        </DetailedOfficeSection>
    )
}

export default DetailedOffice;