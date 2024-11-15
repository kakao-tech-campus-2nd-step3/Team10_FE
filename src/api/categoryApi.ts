import { useQuery } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

const useGetFarmCategories = () => {
  const fetcher = () => defaultApi.get("/api/farm/category").then(res => res.data);

  return useQuery({
    queryKey: ["farmCategories"],
    queryFn: fetcher,
  });
};

const useGetProductCategories = () => {
  const fetcher = () => defaultApi.get("/api/categories").then(res => res.data);

  return useQuery({
    queryKey: ["productCategories"],
    queryFn: fetcher,
  });
};

export { useGetFarmCategories, useGetProductCategories };
