import { SickLeaveWhereInput } from "./SickLeaveWhereInput";
import { SickLeaveOrderByInput } from "./SickLeaveOrderByInput";

export type SickLeaveFindManyArgs = {
  where?: SickLeaveWhereInput;
  orderBy?: Array<SickLeaveOrderByInput>;
  skip?: number;
  take?: number;
};
