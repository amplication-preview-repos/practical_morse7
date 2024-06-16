import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EmailLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="htmlMessage" source="htmlMessage" />
        <TextField label="ID" source="id" />
        <TextField label="sentAt" source="sentAt" />
        <TextField label="subject" source="subject" />
        <TextField label="textMessage" source="textMessage" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
