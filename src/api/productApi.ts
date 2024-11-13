import { useQuery } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

const useGetProducts = () => {
  const fetcher = () => defaultApi.get(`/product`).then(({ data }) => data);

  return useQuery({
    queryKey: ["products"],
    queryFn: fetcher,
  });
};

const useGetProductDetail = () => null;

export { useGetProducts, useGetProductDetail };
