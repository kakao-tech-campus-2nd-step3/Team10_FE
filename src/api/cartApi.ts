import { useQuery, useMutation } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type CartData = {
  product_id: number;
  count: number;
};

const useCreateCarts = () => {
  const fetcher = (cartData: CartData) => defaultApi.post(`/api/carts/{product_id}`, cartData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useGetCarts = () => {
  const fetcher = () => defaultApi.get(`/api/carts`).then(({ data }) => data);

  return useQuery({
    queryKey: ["carts"],
    queryFn: fetcher,
  });
};

export { useCreateCarts, useGetCarts };
