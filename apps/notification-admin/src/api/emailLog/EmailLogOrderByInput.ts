import { SortOrder } from "../../util/SortOrder";

export type EmailLogOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  htmlMessage?: SortOrder;
  id?: SortOrder;
  sentAt?: SortOrder;
  subject?: SortOrder;
  textMessage?: SortOrder;
  updatedAt?: SortOrder;
};
