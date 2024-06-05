import { DayOff } from "../dayOff/DayOff";
import { Meeting } from "../meeting/Meeting";
import { SickLeave } from "../sickLeave/SickLeave";

export type Employee = {
  createdAt: Date;
  dateJoined: Date | null;
  dayOffs?: Array<DayOff>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  meetings?: Array<Meeting>;
  sickLeaves?: Array<SickLeave>;
  updatedAt: Date;
};
