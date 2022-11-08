import { useEffectOnce } from "react-use";
import { useDefaultApiClientContext } from "../../../shared";
import { useAuthService } from "../services";

export const AuthorizeController = () => {
  const { authorize, logout } = useAuthService();
  const apiClient = useDefaultApiClientContext();

  useEffectOnce(() => {
    authorize();
    apiClient.setErrorHandler((e) => {
      if (e.response?.status === 401) {
        logout();
      }
    });
  });
  return null;
};
