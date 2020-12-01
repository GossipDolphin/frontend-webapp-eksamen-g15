import React from 'react';
import {OfficeCardStyled} from "../styles/StyledComponents"

export const OfficeCard = ({office}) =>{
    return(
        <OfficeCardStyled>
            <p>{office.city}</p>
            <p>{office.nummer}</p>
            <p>{office.tlf}</p>
            <p>{office.epost}</p>
        </OfficeCardStyled>
    )
}

export default OfficeCard;