export type Item = {
  id: number;
};

export type Farm = Item & {
  name: string;
  address: string;
  profile?: string;
  description: string;
  date: string;
};

export type Product = Item & {
  name: string;
  unit: string;
  pricePerGram: string;
  description: string;
  mainImage?: string;
  price: number;
  deliveryFee: number;
  tag?: string;
  farm: Farm;
};

export type Review = Item & {
  name: string;
  description: string;
  rating: number;
  image?: string;
  date: string;
};

export type Schedule = Item & {
  name: string;
  address: string;
  addressDetail: string;
  latitude: number;
  longitude: number;
  description: string;
  mainImage?: string;
};

export type Category = Item & {
  name: string;
};

export type FarmCategory = Category & {
  imageUrl?: string;
};

export type ProductOrderStatus =
  | "ORDERED"
  | "PREPARING"
  | "DELIVERING"
  | "DELIVERED"
  | "REFUNDING"
  | "REFUNDED"
  | "CANCELED";

export type ProductOrder = {
  product: Product;
  amount: number;
  deliveryFee: number;
  status: ProductOrderStatus;
};

export type Order = Item & {
  products: ProductOrder[];
  orderDate: string;
};
