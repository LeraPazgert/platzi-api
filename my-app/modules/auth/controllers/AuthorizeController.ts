import { useEffectOnce } from "react-use";
import { useAppSelector } from "../../../shared";
import { useAuthService } from "../services";

export const AuthorizeController = () => {
  const { authorize } = useAuthService();
 
  useEffectOnce(() => {
    authorize();
  });
  return null;
};
