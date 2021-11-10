import {FC} from "react";
import moment from "moment";
import {IEmployee} from "../../api";
import {BirthdayItemWrapper} from "./styles";

interface BirthdayItemProps {
  employee: IEmployee;
}

const BirthdayItem: FC<BirthdayItemProps> = ({employee}) => {
  const fullEmployeeNames = `${employee.firstName} ${employee.lastName}`;
  const fullDateOfBirthday = `${moment(employee.dob).format('D MMMM, YYYY')} year`;

  return <BirthdayItemWrapper>{fullEmployeeNames} - {fullDateOfBirthday}</BirthdayItemWrapper>
};

export default BirthdayItem;
