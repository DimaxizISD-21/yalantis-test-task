import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import YalantisApi, { IEmployee } from "../../../api";

interface EmployeesState {
  employees: IEmployee[];
  selectedEmployees: IEmployee[];
  error: string;
  status: string;
}

const initialState: EmployeesState = {
  employees: [],
  selectedEmployees: [],
  error: "",
  status: ""
};

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async () => {
    const response = YalantisApi.getEmployees();
    return await response;
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.selectedEmployees.push(action.payload);
      localStorage.setItem(
        "selectedEmployees",
        JSON.stringify(state.selectedEmployees)
      );
    },
    removeEmployee: (state, action) => {
      state.selectedEmployees = state.selectedEmployees.filter(
        (item) => !item.id.includes(action.payload)
      );
      localStorage.setItem(
        "selectedEmployees",
        JSON.stringify(state.selectedEmployees)
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getEmployees.fulfilled, (state, { payload }) => {
      state.status = "resolved";
      state.employees = payload;
      state.selectedEmployees = JSON.parse(
        localStorage.getItem("selectedEmployees") || "[]"
      );
    });
    builder.addCase(getEmployees.rejected, (state) => {
      state.status = "rejected";
      state.error = "Failed load data";
    });
  }
});

export const { addEmployee, removeEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
