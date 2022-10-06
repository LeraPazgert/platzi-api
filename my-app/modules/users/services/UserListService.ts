import { useCallback } from "react";
import { useAppDispatch, useAppSelector, useUsersApi } from "../../../shared";
import {
  setIsLoading,
  setUserList,
  setUserListError,
  setFilter,
  UsersFilter,
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

  const changeFilter = useCallback(
    (filter: Partial<UsersFilter>) => {
      dispatch(setFilter(filter));
    },
    [dispatch]
  );

  return { users, loading, error, getUsers, changeFilter };
};
