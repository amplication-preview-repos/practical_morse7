import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  isVerified?: boolean | null;
  lastName?: string | null;
  password: string;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  rolesField?: "Option1" | null;
  status?: "Option1" | null;
  statusField?: "Option1" | null;
  username: string;
};
