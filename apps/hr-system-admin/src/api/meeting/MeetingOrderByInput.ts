import { SortOrder } from "../../util/SortOrder";

export type MeetingOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  meetingDate?: SortOrder;
  updatedAt?: SortOrder;
};
