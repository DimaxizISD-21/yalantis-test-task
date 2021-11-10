import styled from "styled-components";

export const EmployeesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 30px;
  margin: 50px 0;
`;
EmployeesWrapper.displayName = "EmployeesWrapper";

export const EmployeesBox = styled.div``;
EmployeesBox.displayName = "EmployeesBox";

export const EmployeesBirthday = styled.div``;
EmployeesBirthday.displayName = "EmployeesBirthday";

export const EmployeesTitle = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;
EmployeesTitle.displayName = "EmployeesTitle";
