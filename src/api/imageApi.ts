import { useMutation } from "@tanstack/react-query";
import { externalApi, needAuthDefaultApi } from "@api/axiosInstance";

type ImageKeyPrefix = "FARM" | "FARM_REVIEW" | "PRODUCT" | "PRODUCT_REVIEW" | "MEMBER_PROFILE" | "PRODUCT_INTRO";

const getImageUpdatePresignedUrl = async (keyPrefix: ImageKeyPrefix) =>
  needAuthDefaultApi.get("/api/s3/presigned-url-put", { params: { keyPrefix } });

const putImage2S3 = async (presignedUrl: string, image: File) => {
  const formData = new FormData();
  formData.append("image", image as Blob);

  return externalApi.put(presignedUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const putImage = async (type: ImageKeyPrefix, image: File) => {
  const getPresignedUrlResponse = await getImageUpdatePresignedUrl(type);
  if (!getPresignedUrlResponse.data) {
    throw new Error("Failed to get presigned URL");
  }
  const { presignedPutUrl, keyName, objectUrl } = getPresignedUrlResponse.data;
  const putImageResponse = await putImage2S3(presignedPutUrl, image);
  if (putImageResponse.status === 200) {
    return {
      imageUrl: objectUrl,
      objectKey: keyName,
    };
  }
  throw new Error("Failed to put image");
};

type PostImageProps = {
  type: ImageKeyPrefix;
  image: File;
  referenceId: number;
};
const usePostImage = () => {
  const fetcher = async ({ type, image, referenceId }: PostImageProps) =>
    needAuthDefaultApi.post("/api/images", {
      ...(await putImage(type, image)),
      type,
      referenceId,
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: data => data,
  });
};

const usePostImages = () => {
  const fetcher = async (images: PostImageProps[]) => {
    const promises = images.map(image => putImage(image.type, image.image));
    const results = await Promise.all(promises);
    return needAuthDefaultApi.post("/api/images", results);
  };

  return useMutation({
    mutationFn: fetcher,
    onSuccess: data => data,
  });
};

export { usePostImage, usePostImages };
