import { useCallback } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useAuthApi,
  useDefaultLocalStorageContext,
  useFilesApi,
  useUsersApi,
} from '../../../shared';
import { exit, setProfile } from '../slices';
import { LoginFormData, RegisterFormData } from '../types';

export const useAuthService = () => {
  const dispatch = useAppDispatch();
  const authApi = useAuthApi();
  const userApi = useUsersApi();
  const filesApi = useFilesApi();
  const tokenStorage = useDefaultLocalStorageContext();
  const { isAuth } = useAppSelector(state => state.auth);

  const login = useCallback(
    async (data: LoginFormData) => {
      try {
        const token = await authApi.signIn(data);
        tokenStorage.set(token.access_token);
        const profileData = await authApi.getProfile();
        dispatch(setProfile({ isAuth: true, profile: profileData }));
      } catch (e) {
        throw e;
      }
    },
    [authApi, dispatch, tokenStorage],
  );

  const register = useCallback(
    async (data: RegisterFormData) => {
      try {
        const formData = new FormData();
        formData.append('file', data.avatar, data.avatar.name);

        const image = await filesApi.uploadFile(formData);
        const user = await userApi.createUser({
          ...data,
          avatar: image.location,
        });
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
    [authApi, dispatch, filesApi, tokenStorage, userApi],
  );

  const logout = useCallback(async () => {
    try {
      tokenStorage.remove();
      dispatch(exit());
    } catch (e) {
      throw e;
    }
  }, [dispatch, tokenStorage]);

  const authorize = useCallback(async () => {
    try {
      const token = tokenStorage.get();
      if (token && !isAuth) {
        const profileData = await authApi.getProfile();
        dispatch(setProfile({ isAuth: true, profile: profileData }));
      } else {
        dispatch(setProfile({ isAuth: false }));
      }
    } catch (e) {
      throw e;
    }
  }, [authApi, dispatch, isAuth, tokenStorage]);

  return { login, register, logout, authorize };
};
