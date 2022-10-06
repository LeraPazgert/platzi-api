import { IUser } from "../../../users";

export interface AuthState {
  profile: IUser | null;
  isAuth: boolean | null;
}
