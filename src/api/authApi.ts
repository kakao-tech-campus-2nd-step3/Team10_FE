import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { defaultApi, needAuthDefaultApi } from "@api/axiosInstance";
import { userAtomWithPersistence } from "@atom/userAtom";

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

const useGetMyInfo = () => {
  const user = useAtomValue(userAtomWithPersistence);

  const fetcher = async () => needAuthDefaultApi.get("/api/members/self").then(({ data }) => data);
  return useQuery({
    queryKey: ["myInfo", user.id],
    queryFn: fetcher,
  });
};

export { useRegisterEmail, useLoginEmail, useGetMyInfo };
