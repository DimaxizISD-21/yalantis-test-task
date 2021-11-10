import { FC } from "react";
import EmployeeItem from "../EmployeeItem";
import { IEmployee } from "../../api";
import { alphabet } from "../../utils";
import { EmployeesListWrapper } from "./styles";

interface EmployeesListProps {
  employees: IEmployee[];
}

interface EmployeeItemsListProps {
  char: string;
  employees: IEmployee[];
}

interface AlphabetListProps {
  employees: IEmployee[];
}

const EmployeeItemsList: FC<EmployeeItemsListProps> = ({ char, employees }) => {
  return (
    <div>
      <h2>{char}</h2>
      {employees.length > 0
        ? employees.map((employee) => (
            <EmployeeItem key={employee.id} employee={employee} />
          ))
        : "No employees"}
    </div>
  );
};

const AlphabetList: FC<AlphabetListProps> = ({ employees }) => {
  return (
    <>
      {alphabet.map((char, index) => (
        <EmployeeItemsList
          key={index}
          char={char}
          employees={employees.filter(
            (employee) => employee.firstName[0] === char
          )}
        />
      ))}
    </>
  );
};

const EmployeesList: FC<EmployeesListProps> = ({ employees }) => {
  return (
    <EmployeesListWrapper>
      <AlphabetList employees={employees} />
    </EmployeesListWrapper>
  );
};

export default EmployeesList;
