import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type FarmData = {
  name: string;
  imageUrl: string;
  categoryId: number;
  description: string;
  price: string;
  maxPeople: string;
  maxTeam: string;
  growEnv: string;
  addressDetail: string;
  phoneNumber: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

const useGetFarms = () => {
  const fetcher = () => defaultApi.get(`/farms`).then(({ data }) => data);

  return useQuery({
    queryKey: ["farms"],
    queryFn: fetcher,
  });
};

const useGetFarmDetail = (farmId: number) => {
  const fetcher = () => defaultApi.get(`/farms/${farmId}/detail`).then(({ data }) => data);
  return useQuery({
    queryKey: ["farms", farmId],
    queryFn: fetcher,
    enabled: !!farmId,
  });
};

const useCreateFarms = () => {
  const fetcher = (farmData: FarmData) => defaultApi.post(`/farms`, farmData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useUpdateFarms = (farmId: number) => {
  const queryClient = useQueryClient();

  const fetcher = (farmData: FarmData) => defaultApi.put(`/farms/${farmId}/detail`, farmData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["farms", farmId],
      }),
  });
};

export { useGetFarms, useGetFarmDetail, useCreateFarms, useUpdateFarms };
