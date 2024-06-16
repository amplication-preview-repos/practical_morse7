import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmailLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="htmlMessage" multiline source="htmlMessage" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="subject" source="subject" />
        <TextInput label="textMessage" multiline source="textMessage" />
      </SimpleForm>
    </Edit>
  );
};
