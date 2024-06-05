import { Employee } from "../employee/Employee";

export type Meeting = {
  createdAt: Date;
  duration: number | null;
  employee?: Employee | null;
  id: string;
  location: string | null;
  meetingDate: Date | null;
  updatedAt: Date;
};
