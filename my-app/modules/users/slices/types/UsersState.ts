import { IUser } from "../../types";
import { UsersFilter } from "./UsersFilter";

export interface UsersState {
  users: IUser[];
  loading: boolean;
  error: Error | null;
  filter: UsersFilter;
}
