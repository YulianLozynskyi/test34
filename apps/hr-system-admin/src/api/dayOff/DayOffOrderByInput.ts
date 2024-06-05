import { SortOrder } from "../../util/SortOrder";

export type DayOffOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
