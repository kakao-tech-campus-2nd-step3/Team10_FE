export type Item = {
  id: number;
};

export type Farm = Item & {
  name: string;
  address: string;
  profile?: string;
};

export type Product = Item & {
  name: string;
  unit: string;
  pricePerGram: string;
  description: string;
  mainImage?: string;
  tag?: string;
  farm: Farm;
};

export type Schedule = Item & {
  name: string;
  farm: Farm;
  mainImage?: string;
};
