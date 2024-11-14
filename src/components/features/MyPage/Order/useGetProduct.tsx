import { useQuery } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

const useGetProduct = (productId: number) => {
  const fetcher = () => defaultApi.get(`/product/${productId}`).then(({ data }) => data);

  return useQuery({
    queryKey: ["product", productId],
    queryFn: fetcher,
    enabled: !!productId,
  });
};

export default useGetProduct;
