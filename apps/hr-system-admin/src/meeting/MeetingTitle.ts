import { Meeting as TMeeting } from "../api/meeting/Meeting";

export const MEETING_TITLE_FIELD = "location";

export const MeetingTitle = (record: TMeeting): string => {
  return record.location?.toString() || String(record.id);
};
