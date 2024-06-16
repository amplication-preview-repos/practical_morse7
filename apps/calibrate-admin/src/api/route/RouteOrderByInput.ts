import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  completeStatus?: SortOrder;
  createdAt?: SortOrder;
  finish?: SortOrder;
  finishLocation?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  start?: SortOrder;
  startLocation?: SortOrder;
  updatedAt?: SortOrder;
};
