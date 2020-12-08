import React, { useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';
import { EmployeeGridSection } from '../styles/StyledComponents';

const Employees = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const generateEmployees = () => {
    const employees = [];
    for (let i = 0; i < 14; i += 1) {
      employees.push({ name: `navn${i}`, position: `rør ekspert${i}` });
    }
    return employees;
  };
  useEffect(() => {
    setEmployeeList(generateEmployees);
  }, []);

  return (
    <EmployeeGridSection>
      {employeeList.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} />
      ))}
    </EmployeeGridSection>
  );
};

export default Employees;
