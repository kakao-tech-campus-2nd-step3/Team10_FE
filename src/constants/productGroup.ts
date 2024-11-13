const productGroup = [
  {
    group: "카테고리",
    subGroup: ["채소", "과일"],
  },
  {
    group: "배송",
    subGroup: [],
  },
] as const;

export type ProductGroup = (typeof productGroup)[number]["group"];
export type SubProductGroup = (typeof productGroup)[number]["subGroup"][number];
export type ProductGroupItem = {
  group: ProductGroup;
  subGroup: (typeof productGroup)[number]["subGroup"];
};

export default productGroup;
