import { useMemo } from "react";
import { FilesData, FilesResponse } from "../../../types";
import { useApiUrlBuilderContext } from "../../url";
import { useDefaultApiClientContext } from "../contexts";

export const useFilesApi = () => {
  const apiClient = useDefaultApiClientContext();
  const apiUrlBuilder = useApiUrlBuilderContext();

  return useMemo(
    () => ({
      uploadFile: (data: FormData) =>
        apiClient.post<FormData, FilesResponse>({
          url: apiUrlBuilder.files(),
          data: data,
        }),
    }),
    [apiClient, apiUrlBuilder]
  );
};
