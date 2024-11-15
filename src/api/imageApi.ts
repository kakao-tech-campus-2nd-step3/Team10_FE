import { useMutation } from "@tanstack/react-query";
import { needAuthDefaultApi } from "@api/axiosInstance";

const usePostImage = () => {
  const fetcher = (img: string) => {
    const formData = new FormData();
    formData.append("image", img);
    return needAuthDefaultApi.post("/api/images", formData).then(res => res.data);
  };

  return useMutation({
    mutationFn: fetcher,
    onSuccess: data => data,
  });
};

const usePostImages = () => null;

export { usePostImage, usePostImages };
