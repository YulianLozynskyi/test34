import { DayOffUpdateManyWithoutEmployeesInput } from "./DayOffUpdateManyWithoutEmployeesInput";
import { MeetingUpdateManyWithoutEmployeesInput } from "./MeetingUpdateManyWithoutEmployeesInput";
import { SickLeaveUpdateManyWithoutEmployeesInput } from "./SickLeaveUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  dateJoined?: Date | null;
  dayOffs?: DayOffUpdateManyWithoutEmployeesInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  meetings?: MeetingUpdateManyWithoutEmployeesInput;
  sickLeaves?: SickLeaveUpdateManyWithoutEmployeesInput;
};
