import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isVerified: boolean | null;
  lastName: string | null;
  profilePicture: JsonValue;
  roles: JsonValue;
  rolesField?: "Option1" | null;
  status?: "Option1" | null;
  statusField?: "Option1" | null;
  updatedAt: Date;
  username: string;
};
