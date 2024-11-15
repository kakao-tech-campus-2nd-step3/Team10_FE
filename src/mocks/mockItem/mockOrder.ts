import mockProducts from "@mocks/mockItem/mockProducts";
import { Order } from "@type/index";

const mockOrders: Order[] = [
  {
    id: 1,
    orderDate: "2024-10-01",
    products: [
      {
        product: mockProducts[0],
        amount: 1,
        deliveryFee: 3000,
        status: "ORDERED",
      },
      {
        product: mockProducts[1],
        amount: 2,
        deliveryFee: 3000,
        status: "PREPARING",
      },
      {
        product: mockProducts[2],
        amount: 1,
        deliveryFee: 3000,
        status: "DELIVERING",
      },
      {
        product: mockProducts[3],
        amount: 3,
        deliveryFee: 3000,
        status: "DELIVERED",
      },
    ],
  },
  {
    id: 2,
    orderDate: "2024-10-01",
    products: [
      {
        product: mockProducts[4],
        amount: 1,
        deliveryFee: 3000,
        status: "CANCELED",
      },
      {
        product: mockProducts[5],
        amount: 2,
        deliveryFee: 3000,
        status: "PREPARING",
      },
      {
        product: mockProducts[1],
        amount: 1,
        deliveryFee: 3000,
        status: "REFUNDED",
      },
      {
        product: mockProducts[0],
        amount: 3,
        deliveryFee: 3000,
        status: "REFUNDING",
      },
    ],
  },
  {
    id: 3,
    orderDate: "2024-10-02",
    products: [
      {
        product: mockProducts[1],
        amount: 1,
        deliveryFee: 3000,
        status: "ORDERED",
      },
      {
        product: mockProducts[2],
        amount: 2,
        deliveryFee: 3000,
        status: "PREPARING",
      },
      {
        product: mockProducts[3],
        amount: 1,
        deliveryFee: 3000,
        status: "DELIVERING",
      },
      {
        product: mockProducts[4],
        amount: 3,
        deliveryFee: 3000,
        status: "DELIVERED",
      },
    ],
  },
  {
    id: 4,
    orderDate: "2024-10-04",
    products: [
      {
        product: mockProducts[5],
        amount: 1,
        deliveryFee: 3000,
        status: "ORDERED",
      },
      {
        product: mockProducts[0],
        amount: 2,
        deliveryFee: 3000,
        status: "PREPARING",
      },
      {
        product: mockProducts[1],
        amount: 1,
        deliveryFee: 3000,
        status: "DELIVERING",
      },
      {
        product: mockProducts[2],
        amount: 3,
        deliveryFee: 3000,
        status: "DELIVERED",
      },
    ],
  },
  {
    id: 5,
    orderDate: "2024-10-05",
    products: [
      {
        product: mockProducts[3],
        amount: 1,
        deliveryFee: 3000,
        status: "ORDERED",
      },
      {
        product: mockProducts[4],
        amount: 2,
        deliveryFee: 3000,
        status: "PREPARING",
      },
      {
        product: mockProducts[5],
        amount: 1,
        deliveryFee: 3000,
        status: "DELIVERING",
      },
      {
        product: mockProducts[0],
        amount: 3,
        deliveryFee: 3000,
        status: "DELIVERED",
      },
    ],
  },
];

export default mockOrders;
