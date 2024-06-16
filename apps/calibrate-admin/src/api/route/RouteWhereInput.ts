import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RouteWhereInput = {
  completeStatus?: BooleanNullableFilter;
  finish?: DateTimeNullableFilter;
  finishLocation?: StringNullableFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
  start?: DateTimeNullableFilter;
  startLocation?: StringNullableFilter;
};
