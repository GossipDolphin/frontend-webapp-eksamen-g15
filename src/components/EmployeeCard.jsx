import React from 'react';
import { EmployeeCardStyledArticle } from "../styles/StyledComponents";

const EmployeeCard = ({ employee }) => {
    return (
        <EmployeeCardStyledArticle>
            <section></section>
            <p>Ansatt {employee.name}</p>
            <p>Stilling {employee.position}</p>
        </EmployeeCardStyledArticle>
    )
}
export default EmployeeCard;