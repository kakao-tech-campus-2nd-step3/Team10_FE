import { useQuery, useMutation } from "@tanstack/react-query";
import { defaultApi, needAuthDefaultApi } from "@api/axiosInstance";

type WishlistData = {
  product_id: number;
};

const useCreateWishlists = () => {
  const fetcher = (wishlistData: WishlistData) =>
    defaultApi.post(`/api/wishlist/{product_id}`, wishlistData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useGetWishlists = () => {
  const fetcher = () => needAuthDefaultApi.get(`/api/wishlist`).then(({ data }) => data);

  return useQuery({
    queryKey: ["wishlists"],
    queryFn: fetcher,
  });
};

const useDeleteWishlists = () => {
  const fetcher = (wishlistId: number) => defaultApi.delete(`/api/wishlist/${wishlistId}`).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

export { useCreateWishlists, useGetWishlists, useDeleteWishlists };
