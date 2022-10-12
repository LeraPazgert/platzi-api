import { FieldValues } from "react-hook-form";

export interface RegisterFormData extends FieldValues {
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
