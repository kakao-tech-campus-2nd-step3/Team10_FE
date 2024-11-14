import { useMutation } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type BusinessData = {
  number: string;
  imageUrl: string;
};

const useCreateBusiness = () => {
  const fetcher = (businessData: BusinessData) =>
    defaultApi.post(`/v1/biz/farmer/profile`, businessData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useGetBusinessDetail = () => null;

export { useCreateBusiness, useGetBusinessDetail };
