import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="completeStatus" source="completeStatus" />
        <DateTimeInput label="finish" source="finish" />
        <TextInput label="finishLocation" source="finishLocation" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="start" source="start" />
        <TextInput label="startLocation" source="startLocation" />
      </SimpleForm>
    </Create>
  );
};
