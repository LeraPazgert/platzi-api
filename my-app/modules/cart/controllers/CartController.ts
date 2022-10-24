import { useCallback } from "react";
import { useEffectOnce } from "react-use";
import { useCartService } from "../services";

export const useCartController = () => {
  const { addedProducts } = useCartService();

  const load = useCallback(async () => {
    try {
      return addedProducts;
    } catch {
      // notificationView.error()
    }
  }, [addedProducts]);

  useEffectOnce(() => {
    load();
  });
  return {
    addedProducts,
  };
};
