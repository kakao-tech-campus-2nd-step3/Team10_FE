import { useQuery, useMutation } from "@tanstack/react-query";
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
  const fetcher = () => defaultApi.get(`/product`).then(({ data }) => data);

  return useQuery({
    queryKey: ["products"],
    queryFn: fetcher,
  });
};

const useGetProductDetail = () => null;

const useCreateProducts = () => {
  const fetcher = (productData: ProductData) => defaultApi.post(`/products`, productData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

export { useGetProducts, useGetProductDetail, useCreateProducts };
