import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SickLeaveWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  reason?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
