import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type ProductData = {
  categoryId: number;
  name: string;
  description: string;
  stock: string;
  price: string;
  growEnv: string;
  shippingFee: string;
  phoneNumber: string;
  mainTitle: string;
  subTitle1: string;
  subDesc1: string;
  subTitle2: string;
  subDesc2: string;
  subTitle3: string;
  subDesc3: string;
};

const useGetProducts = (categoryId = 0) => {
  const fetcher = () => defaultApi.get(`/api/products`).then(({ data }) => data);
  const categoryFetcher = () => defaultApi.get(`/api/categories/${categoryId}`).then(({ data }) => data);

  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: categoryId ? categoryFetcher : fetcher,
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
