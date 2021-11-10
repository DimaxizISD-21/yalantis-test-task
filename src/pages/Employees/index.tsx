import { FC, useEffect } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getEmployees } from "../../store/features/employees/employeesSlice";
import EmployeesList from "../../components/EmployeesList";
import BirthdayList from "../../components/BirthdayList";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { EmployeesWrapper, EmployeesBox, EmployeesTitle } from "./styles";

const Employees: FC = () => {
  const dispatch = useTypedDispatch();
  const { status, error, employees, selectedEmployees } = useTypedSelector(
    (state) => state.employees
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  if (status === "loading") return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <EmployeesWrapper>
      <EmployeesBox>
        <EmployeesTitle>Employees</EmployeesTitle>
        <EmployeesList employees={employees} />
      </EmployeesBox>
      <EmployeesBox>
        <EmployeesTitle>Employees birthday</EmployeesTitle>
        <BirthdayList selectedEmployees={selectedEmployees} />
      </EmployeesBox>
    </EmployeesWrapper>
  );
};

export default Employees;
