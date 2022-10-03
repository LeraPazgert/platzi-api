import { useCallback } from "react";
import { useAppDispatch, useAppSelector, useUsersApi } from "../../../shared";
import {
  setIsLoading,
  setUserList,
  setUserListError,
  setLimit,
} from "../slices";

export const useUserListService = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error, filter } = useAppSelector(
    (state) => state.users
  );
  const usersApi = useUsersApi();

  const getUsers = useCallback(async () => {
    dispatch(setIsLoading(true));

    try {
      const users = await usersApi.getUsers(filter.limit);
      dispatch(setUserList(users));
    } catch (e) {
      dispatch(setUserListError(e as Error));
      throw e;
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [dispatch, usersApi, filter]);

  const changeLimit = useCallback(
    (limit: number) => {
      dispatch(setLimit(limit));
    },
    [dispatch]
  );

  return { users, loading, error, getUsers, changeLimit };
};
