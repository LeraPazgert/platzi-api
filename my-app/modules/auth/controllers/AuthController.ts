import { useRouter } from "next/router";
import { useCallback } from "react";
import { useAppUrlBuilderContext } from "../../../shared";
import { useAuthService } from "../services";
import { LoginFormData } from "../types";

export const useAuthController = () => {
  const { login, register, logout } = useAuthService();
  const router = useRouter();
  const appUrlBuilder = useAppUrlBuilderContext();

  const enter = useCallback(
    async (data: LoginFormData) => {
      try {
        await login(data);
        router.push(appUrlBuilder.home());
      } catch (e) {
        // notificationView.error()
      }
    },
    [appUrlBuilder, login, router]
  );

  return {
    enter,
  };
};
