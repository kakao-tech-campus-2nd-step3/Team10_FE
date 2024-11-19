import { useMutation } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type BusinessData = {
  number: string;
  imageUrl: string;
};

const useCreateBusiness = () => {
  const fetcher = (businessData: BusinessData) =>
    defaultApi.post(`/farmer/biz-profile`, businessData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useGetBusiness = () => null;

export { useCreateBusiness, useGetBusiness };
