import { useMutation, useQuery } from "@tanstack/react-query";
import { needAuthDefaultApi } from "@api/axiosInstance";

type ProductOrderRequest = {
  productOrderRequest: { productId: number; count: number }[];
  destinationAddress: string;
  destinationAddressDetail: string;
  deliveryRequest?: string | null;
};

type FarmOrderRequest = {
  farmId: number;
  scheduleId: number;
  memberCount: number;
  request?: string | null;
};

type OrderCancel = {
  orderedProductId: number;
};

const useCreateProductOrder = () => {
  const fetcher = (productOrderData: ProductOrderRequest) =>
    needAuthDefaultApi.post(`/api/orders/pre-order`, productOrderData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
  });
};

const useCreateFarmOrder = () => {
  const fetcher = (farmOrderData: FarmOrderRequest) =>
    needAuthDefaultApi.post(`/api/reservation/pre-reservation`, farmOrderData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
  });
};

const useGetOrder = (orderId: number) => {
  const fetcher = () => needAuthDefaultApi.get(`/api/orders`).then(({ data }) => data);
  return useQuery({
    queryKey: ["orders", orderId],
    queryFn: fetcher,
    enabled: !!orderId,
  });
};

const useCreateOrderCancel = () => {
  const fetcher = (orderCancelData: OrderCancel) =>
    needAuthDefaultApi.post(`/api/aftersales/products/cancel`, orderCancelData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
  });
};

const useCreateOrderRefund = () => {
  const fetcher = (orderRefundData: OrderCancel) =>
    needAuthDefaultApi.post(`/api/aftersales/products/refund-request`, orderRefundData).then(({ data }) => data);

  return useMutation({
    mutationFn: fetcher,
  });
};

export { useCreateProductOrder, useCreateFarmOrder, useGetOrder, useCreateOrderCancel, useCreateOrderRefund };
