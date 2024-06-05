import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DayOffCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  reason?: string | null;
  startDate?: Date | null;
};
