import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DayOffUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  reason?: string | null;
  startDate?: Date | null;
};
