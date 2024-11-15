import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type ProductData = {
  categoryId: number;
  name: string;
  description: string;
  imageUrl: string;
  stock: string;
  price: string;
  growEnv: string;
  shippingFee: string;
  phoneNumber: string;
};

const useGetProducts = () => {
  const fetcher = () => defaultApi.get(`/api/products`).then(({ data }) => data);

  return useQuery({
    queryKey: ["products"],
    queryFn: fetcher,
  });
};

const useGetProductDetail = (productId: number) => {
  const fetcher = () => defaultApi.get(`/api/products/${productId}`).then(({ data }) => data);
  return useQuery({
    queryKey: ["products", productId],
    queryFn: fetcher,
    enabled: !!productId,
  });
};

const useCreateProducts = () => {
  const fetcher = (productData: ProductData) => defaultApi.post(`/api/products`, productData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useUpdateProducts = (productId: number) => {
  const queryClient = useQueryClient();

  const fetcher = (productData: ProductData) =>
    defaultApi.put(`/api/products/${productId}`, productData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["products", productId],
      }),
  });
};

export { useGetProducts, useGetProductDetail, useCreateProducts, useUpdateProducts };
