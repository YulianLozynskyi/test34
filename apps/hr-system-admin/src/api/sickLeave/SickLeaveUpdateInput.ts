import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type SickLeaveUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  reason?: string | null;
  startDate?: Date | null;
};
