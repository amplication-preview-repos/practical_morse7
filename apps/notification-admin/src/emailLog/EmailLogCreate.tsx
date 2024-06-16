import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmailLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="htmlMessage" multiline source="htmlMessage" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="subject" source="subject" />
        <TextInput label="textMessage" multiline source="textMessage" />
      </SimpleForm>
    </Create>
  );
};
