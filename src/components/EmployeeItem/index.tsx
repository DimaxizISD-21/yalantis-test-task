import { ChangeEvent, FC, useEffect, useState } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import {
  addEmployee,
  removeEmployee
} from "../../store/features/employees/employeesSlice";
import {
  EmployeeItemWrapper,
  EmployeeName,
  EmployeeBtnGroup,
  EmployeeActiveWrapper,
  EmployeeNotActiveWrapper,
  EmployeeInput,
  EmployeeLabel
} from "./styles";

interface EmployeeItemProps {
  employee: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

const EmployeeItem: FC<EmployeeItemProps> = ({ employee }) => {
  const [active, setActive] = useState(false);
  const dispatch = useTypedDispatch();

  const handleChangeActive = (e: ChangeEvent<HTMLInputElement>) => {
    setActive(!active);
    if (active) {
      dispatch(removeEmployee(employee.id));
      localStorage.setItem(employee.id, e.target.value);
    } else {
      dispatch(addEmployee(employee));
      localStorage.setItem(employee.id, e.target.value);
    }
  };

  useEffect(() => {
    const checkActiveStatusFromLocalStorage = localStorage.getItem(
      `${employee.id}`
    );

    if (checkActiveStatusFromLocalStorage) {
      setActive(JSON.parse(checkActiveStatusFromLocalStorage));
    }
  }, [employee.id]);

  return (
    <EmployeeItemWrapper>
      <EmployeeName active={active}>
        {employee.firstName} {employee.lastName}
      </EmployeeName>
      <EmployeeBtnGroup>
        <EmployeeNotActiveWrapper>
          <EmployeeInput
            type="radio"
            id={`${employee.id}-not-active`}
            name={employee.firstName}
            value={"false"}
            checked={!active}
            onChange={handleChangeActive}
          />
          <EmployeeLabel htmlFor={`${employee.id}-not-active`}>
            not active
          </EmployeeLabel>
        </EmployeeNotActiveWrapper>
        <EmployeeActiveWrapper>
          <EmployeeInput
            type="radio"
            id={`${employee.id}-active`}
            name={employee.firstName}
            value={"true"}
            checked={active}
            onChange={handleChangeActive}
          />
          <EmployeeLabel htmlFor={`${employee.id}-active`}>
            active
          </EmployeeLabel>
        </EmployeeActiveWrapper>
      </EmployeeBtnGroup>
    </EmployeeItemWrapper>
  );
};

export default EmployeeItem;
