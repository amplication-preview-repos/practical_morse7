import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="isVerified" source="isVerified" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="profilePicture" source="profilePicture" />
        <TextField label="Roles" source="roles" />
        <TextField label="rolesField" source="rolesField" />
        <TextField label="status" source="status" />
        <TextField label="statusField" source="statusField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
