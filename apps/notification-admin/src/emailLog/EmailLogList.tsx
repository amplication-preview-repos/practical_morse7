import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmailLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="htmlMessage" source="htmlMessage" />
        <TextField label="ID" source="id" />
        <TextField label="sentAt" source="sentAt" />
        <TextField label="subject" source="subject" />
        <TextField label="textMessage" source="textMessage" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
