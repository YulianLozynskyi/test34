import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DayOffListRelationFilter } from "../dayOff/DayOffListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeetingListRelationFilter } from "../meeting/MeetingListRelationFilter";
import { SickLeaveListRelationFilter } from "../sickLeave/SickLeaveListRelationFilter";

export type EmployeeWhereInput = {
  dateJoined?: DateTimeNullableFilter;
  dayOffs?: DayOffListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  meetings?: MeetingListRelationFilter;
  sickLeaves?: SickLeaveListRelationFilter;
};
