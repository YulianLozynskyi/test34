import { DayOffCreateNestedManyWithoutEmployeesInput } from "./DayOffCreateNestedManyWithoutEmployeesInput";
import { MeetingCreateNestedManyWithoutEmployeesInput } from "./MeetingCreateNestedManyWithoutEmployeesInput";
import { SickLeaveCreateNestedManyWithoutEmployeesInput } from "./SickLeaveCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  dateJoined?: Date | null;
  dayOffs?: DayOffCreateNestedManyWithoutEmployeesInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  meetings?: MeetingCreateNestedManyWithoutEmployeesInput;
  sickLeaves?: SickLeaveCreateNestedManyWithoutEmployeesInput;
};
