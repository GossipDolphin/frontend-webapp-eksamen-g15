import React, { useEffect, useState } from 'react';
import EmployeeCard from "../components/EmployeeCard";
import { EmployeeGridSection } from "../styles/StyledComponents";

const Employees = () => {
    const [employeeList, setEmployeeList] = useState([])

    class Employee {
        constructor(name, position) {
            this.name = name;
            this.postion = position
        }
    }

    const generateEmployees = () => {
        const employees = [];
        for (let i = 0; i < 14; i++) {
            employees.push(new Employee("navn" + i, "rør ekspert" + i))
        }
        return employees
    }
    useEffect(() => {
        setEmployeeList(generateEmployees);
    }, [])

    return (
        <EmployeeGridSection>
            {employeeList.map(employee => {
                return (
                    <EmployeeCard employee={employee}></EmployeeCard>
                )
            })}
        </EmployeeGridSection>
    )
}

export default Employees;