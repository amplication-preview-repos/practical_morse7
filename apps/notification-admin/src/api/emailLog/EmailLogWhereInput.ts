import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EmailLogWhereInput = {
  body?: StringNullableFilter;
  email?: StringNullableFilter;
  htmlMessage?: StringNullableFilter;
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  subject?: StringNullableFilter;
  textMessage?: StringNullableFilter;
};
