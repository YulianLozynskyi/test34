import { Employee } from "../employee/Employee";

export type DayOff = {
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  reason: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
