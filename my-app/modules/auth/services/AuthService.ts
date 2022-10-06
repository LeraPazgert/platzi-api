import { useCallback } from "react";
import {
  useAppDispatch,
  useAuthApi,
  useDefaultLocalStorageContext,
  useUsersApi,
} from "../../../shared";
import { LoginFormData } from "../types";
import { exit, setProfile } from "../slices";
import { IUserCreateRequest } from "../../users";

export const useAuthService = () => {
  const dispatch = useAppDispatch();
  const authApi = useAuthApi();
  const userApi = useUsersApi();
  const tokenStorage = useDefaultLocalStorageContext();

  const login = useCallback(
    async (data: LoginFormData) => {
      try {
        const token = await authApi.signIn(data);
        tokenStorage.set(token.access_token);
        const profileData = await authApi.getProfile();
        dispatch(setProfile({ isAuth: true, profile: profileData }));
      } catch (e) {
        //store
        
        throw e;
      }
    },
    [authApi, dispatch, tokenStorage]
  );

  const register = useCallback(
    async (data: IUserCreateRequest) => {
      try {
        const user = await userApi.createUser(data);
        const token = await authApi.signIn({
          email: data.email,
          password: data.password,
        });
        tokenStorage.set(token.access_token);
        dispatch(setProfile({ isAuth: true, profile: user }));
      } catch (e) {
        throw e;
      }
    },
    [authApi, dispatch, tokenStorage, userApi]
  );

  const logout = useCallback(async () => {
    try {
      tokenStorage.remove();
      dispatch(exit());
    } catch (e) {
      throw e;
    }
  }, [dispatch, tokenStorage]);

  return { login, register, logout };
};