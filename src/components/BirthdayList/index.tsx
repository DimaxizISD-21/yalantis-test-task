import {FC} from "react";
import {IEmployee} from "../../api";
import moment from "moment";
import BirthdayItem from "../BirthdayItem";
import {BirthdayListWrapper, BirthdayListTitle} from "./styles";

interface BirthdayListProps {
  selectedEmployees: IEmployee[];
}

interface ListItemsProps {
  month: string;
  employees: IEmployee[];
}

interface MonthsListProps {
  employees: IEmployee[];
}

const ListItems: FC<ListItemsProps> = ({month, employees}) => {
  const sortedEmployeesByLastName = employees.sort((a, b) =>
    a.lastName.localeCompare(b.lastName));

  return (
    <div>
      <h2>{month}</h2>
      {sortedEmployeesByLastName.length > 0
        ? sortedEmployeesByLastName.map((employee) => (
          <BirthdayItem key={employee.id} employee={employee}/>
        ))
        : "No employees"}
    </div>
  );
};

const MonthsList: FC<MonthsListProps> = ({employees}) => {
  const months = moment.months();
  const currentMonth = moment().month();
  const monthsArr = months.concat(months.slice(0, currentMonth)).slice(-12);

  return (
    <>
      {monthsArr.map((month, index) => (
        <ListItems
          key={index}
          month={month}
          employees={employees.filter(
            (employee) => moment(employee.dob).format('MMMM') === month
          )}
        />
      ))}
    </>
  );
};

const BirthdayList: FC<BirthdayListProps> = ({selectedEmployees}) => {
  return (
    <BirthdayListWrapper>
      {selectedEmployees.length > 0 ? (
        <MonthsList employees={selectedEmployees}/>
      ) : (
        <BirthdayListTitle>Employees List is empty</BirthdayListTitle>
      )}
    </BirthdayListWrapper>
  );
};

export default BirthdayList;
