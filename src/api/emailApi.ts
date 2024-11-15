import { useMutation } from "@tanstack/react-query";
import { defaultApi, needAuthDefaultApi } from "@api/axiosInstance";

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

export { useCreateEmail, useLoginEmail, useCreateFarmer };
