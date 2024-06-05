import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DayOffTitle } from "../dayOff/DayOffTitle";
import { MeetingTitle } from "../meeting/MeetingTitle";
import { SickLeaveTitle } from "../sickLeave/SickLeaveTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateJoined" source="dateJoined" />
        <ReferenceArrayInput
          source="dayOffs"
          reference="DayOff"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DayOffTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="meetings"
          reference="Meeting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MeetingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sickLeaves"
          reference="SickLeave"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SickLeaveTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
