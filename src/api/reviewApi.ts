import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { defaultApi } from "@api/axiosInstance";

type ReviewData = {
  rating: number;
  content: string;
  product_id?: number;
  farm_id?: number;
};

const useGetProductReviews = (reviewId: number) => {
  const fetcher = () => defaultApi.get(`/api/products/{product_id}/reviews`).then(({ data }) => data);

  return useQuery({
    queryKey: ["reviews", reviewId],
    queryFn: fetcher,
  });
};

const useCreateProductReviews = () => {
  const fetcher = (reviewData: ReviewData) =>
    defaultApi.post(`/api/products/{product_id}/reviews`, reviewData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

const useUpdateReviews = (reviewId: number) => {
  const queryClient = useQueryClient();

  const fetcher = (reviewData: ReviewData) =>
    defaultApi.put(`/api/reviews/{review_id}`, reviewData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["reviews", reviewId],
      }),
  });
};

const useDeleteReviews = (reviewId: number) => {
  const queryClient = useQueryClient();

  const fetcher = () => defaultApi.delete(`/api/reviews/${reviewId}`).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", reviewId],
      });
    },
  });
};

const useGetFarmReviews = (reviewId: number) => {
  const fetcher = () => defaultApi.get(`/api/farms/{farm_id}/reviews`).then(({ data }) => data);

  return useQuery({
    queryKey: ["reviews", reviewId],
    queryFn: fetcher,
  });
};

const useCreateFarmReviews = () => {
  const fetcher = (reviewData: ReviewData) =>
    defaultApi.post(`/api/farms/{reservationId}/reviews`, reviewData).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

export {
  useGetProductReviews,
  useCreateProductReviews,
  useUpdateReviews,
  useDeleteReviews,
  useGetFarmReviews,
  useCreateFarmReviews,
};
