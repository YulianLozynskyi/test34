import { DayOff as TDayOff } from "../api/dayOff/DayOff";

export const DAYOFF_TITLE_FIELD = "id";

export const DayOffTitle = (record: TDayOff): string => {
  return record.id?.toString() || String(record.id);
};
