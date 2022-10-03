import { useCallback } from "react";
import { useEffectOnce } from "react-use";
import { useUserListService } from "../services";

export const useUserListController = () => {
  const { users, loading, error, getUsers, changeLimit } = useUserListService();

  const load = useCallback(async () => {
    try {
      await getUsers();
    } catch {
      // notificationView.error()
    }
  }, [getUsers]);

  const changePageSize = useCallback(
    async (limit: number) => {
      changeLimit(limit);
      await load();
    },
    [changeLimit, load]
  );

  useEffectOnce(() => {
    load();
  });

  return {
    users,
    loading,
    error,
    changePageSize,
  };
};
