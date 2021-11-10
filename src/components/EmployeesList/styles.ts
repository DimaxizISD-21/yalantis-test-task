import styled from "styled-components";

export const EmployeesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 1rem;
  border-right: 2px solid #000;
  justify-content: center;
`;
EmployeesListWrapper.displayName = "EmployeesListWrapper";
