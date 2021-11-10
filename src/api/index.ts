import axios from "axios";

export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

class YalantisApi {
  getEmployees = (): Promise<IEmployee[]> => {
    return axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((res) => res.data);
  };
}

export default new YalantisApi();
