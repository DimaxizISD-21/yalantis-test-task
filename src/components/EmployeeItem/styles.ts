import styled from "styled-components";

export const EmployeeItemWrapper = styled.div``;
EmployeeItemWrapper.displayName = "EmployeeItemWrapper";

export const EmployeeName = styled("h3")<{ active: boolean }>`
  color: ${(props) => (props.active ? "#0d6efd;" : "#000;")};
`;
EmployeeName.displayName = "EmployeeName";

export const EmployeeBtnGroup = styled.div``;
EmployeeBtnGroup.displayName = "EmployeeBtnGroup";

export const EmployeeNotActiveWrapper = styled.div``;
EmployeeNotActiveWrapper.displayName = "EmployeeNotActiveWrapper";

export const EmployeeActiveWrapper = styled.div``;
EmployeeActiveWrapper.displayName = "EmployeeActiveWrapper";

export const EmployeeInput = styled.input`
  cursor: pointer;
`;
EmployeeInput.displayName = "EmployeeInput";

export const EmployeeLabel = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;
EmployeeLabel.displayName = "EmployeeLabel";
