import { useMutation } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type LoginData = {
  email: string;
  password: string;
};

const useRegisterEmail = () => {
  const fetcher = (registerData: RegisterData) =>
    defaultApi.post(`/api/member/sign-up`, registerData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useLoginEmail = () => {
  const fetcher = (loginData: LoginData) => defaultApi.post(`/api/login`, loginData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

export { useRegisterEmail, useLoginEmail };
