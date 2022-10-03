import { useMemo } from "react";
import { IUser } from "../../../../modules";

import { useApiUrlBuilderContext } from "../../url";
import { useDefaultApiClientContext } from "../contexts";

export const useUsersApi = () => {
  const apiClient = useDefaultApiClientContext();
  const apiUrlBuilder = useApiUrlBuilderContext();

  return useMemo(
    () => ({
      getUsers: (limit: number) =>
        apiClient.get<IUser[]>({ url: apiUrlBuilder.users(limit) }),
    }),
    [apiClient, apiUrlBuilder]
  );
};
