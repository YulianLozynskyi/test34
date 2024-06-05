import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type MeetingUpdateInput = {
  duration?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  location?: string | null;
  meetingDate?: Date | null;
};
