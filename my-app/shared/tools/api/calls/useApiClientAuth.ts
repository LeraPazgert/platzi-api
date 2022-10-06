import { useMemo } from "react";
import { IUser } from "../../../../modules";
import { AuthResponse, LoginFormData } from "../../../../modules/auth";
import { useApiUrlBuilderContext } from "../../url";
import { useDefaultApiClientContext } from "../contexts";

export const useAuthApi = () => {
  const apiClient = useDefaultApiClientContext();
  const apiUrlBuilder = useApiUrlBuilderContext();

  return useMemo(
    () => ({
      getProfile: () =>
        apiClient.get<IUser>({ url: apiUrlBuilder.authProfile() }),
      signIn: (user: LoginFormData) =>
        apiClient.post<LoginFormData, AuthResponse>({
          url: apiUrlBuilder.authLogin(),
          data: user,
        }),
    }),
    [apiClient, apiUrlBuilder]
  );
};
