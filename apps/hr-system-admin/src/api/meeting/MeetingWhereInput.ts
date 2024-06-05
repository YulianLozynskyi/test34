import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MeetingWhereInput = {
  duration?: IntNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  meetingDate?: DateTimeNullableFilter;
};
