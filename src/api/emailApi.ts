import { useMutation, useQueryClient } from "@tanstack/react-query";
import { defaultApi, needAuthDefaultApi } from "@api/axiosInstance";
import useLogin from "@hooks/useLogin";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type LoginData = {
  email: string;
  password: string;
};

type FarmerData = {
  name: string;
  address: string;
  phone: string;
};
type AddressData = {
  defaultAddress: string;
  addressDetail: string;
  coordinateX: number;
  coordinateY: number;
};

const useCreateEmail = () => {
  const fetcher = (registerData: RegisterData) =>
    defaultApi.post(`/member/sign-up`, registerData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useLoginEmail = () => {
  const fetcher = (loginData: LoginData) => defaultApi.post(`/login`, loginData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useCreateFarmer = () => {
  const fetcher = (farmerData: FarmerData) =>
    needAuthDefaultApi.put(`/api/members/to-farmer`, farmerData).then(({ data }) => data);
  return useMutation({ mutationFn: fetcher });
};

const useUpdateEmail = () => {
  const queryClient = useQueryClient();
  const fetcher = (updateData: RegisterData) =>
    needAuthDefaultApi.put(`/api/members/update/customer`, updateData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["email"],
      }),
  });
};

const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  const fetcher = (updateData: AddressData) =>
    needAuthDefaultApi.put(`/api/members/update/customer/address`, updateData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["address"],
      }),
  });
};

const useDeleteAccount = () => {
  const { logout } = useLogin();
  const fetcher = () => needAuthDefaultApi.delete(`/api/members/delete`).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => logout(),
  });
};

export { useCreateEmail, useLoginEmail, useUpdateEmail, useUpdateAddress, useCreateFarmer, useDeleteAccount };
