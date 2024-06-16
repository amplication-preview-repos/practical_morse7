import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="completeStatus" source="completeStatus" />
        <DateTimeInput label="finish" source="finish" />
        <TextInput label="finishLocation" source="finishLocation" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="start" source="start" />
        <TextInput label="startLocation" source="startLocation" />
      </SimpleForm>
    </Edit>
  );
};
