import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type SickLeaveCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  reason?: string | null;
  startDate?: Date | null;
};
