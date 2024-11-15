import { useMutation, useQueryClient } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type StoreData = {
  name: string;
  address: string;
  phone: number;
};

const useCreateStore = () => {
  const fetcher = (storeData: StoreData) => defaultApi.post(`/api/stores`, storeData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useUpdateStore = () => {
  const queryClient = useQueryClient();

  const fetcher = (storeData: StoreData) => defaultApi.put(`/api/stores`, storeData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["store"],
      }),
  });
};

export { useCreateStore, useUpdateStore };
