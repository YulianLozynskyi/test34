import { DayOffWhereInput } from "./DayOffWhereInput";
import { DayOffOrderByInput } from "./DayOffOrderByInput";

export type DayOffFindManyArgs = {
  where?: DayOffWhereInput;
  orderBy?: Array<DayOffOrderByInput>;
  skip?: number;
  take?: number;
};
