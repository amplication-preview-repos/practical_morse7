import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isVerified?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  profilePicture?: SortOrder;
  roles?: SortOrder;
  rolesField?: SortOrder;
  status?: SortOrder;
  statusField?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
