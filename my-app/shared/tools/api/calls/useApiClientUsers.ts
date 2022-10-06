import { useMemo } from "react";
import { IUser, IUserCreateRequest } from "../../../../modules";

import { useApiUrlBuilderContext } from "../../url";
import { useDefaultApiClientContext } from "../contexts";

export const useUsersApi = () => {
  const apiClient = useDefaultApiClientContext();
  const apiUrlBuilder = useApiUrlBuilderContext();

  return useMemo(
    () => ({
      getUsers: (limit: number) =>
        apiClient.get<IUser[]>({ url: apiUrlBuilder.users(limit) }),
      createUser: (user: IUserCreateRequest) =>
        apiClient.post<IUserCreateRequest, IUser>({
          url: apiUrlBuilder.user(),
          data: user,
        }),
    }),
    [apiClient, apiUrlBuilder]
  );
};
