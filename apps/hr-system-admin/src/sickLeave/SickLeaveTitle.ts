import { SickLeave as TSickLeave } from "../api/sickLeave/SickLeave";

export const SICKLEAVE_TITLE_FIELD = "id";

export const SickLeaveTitle = (record: TSickLeave): string => {
  return record.id?.toString() || String(record.id);
};
