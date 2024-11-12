import { ProductGroup, SubProductGroup } from "@constants/productGroup";
import { FilterItem } from "@hooks/useFilters";

export type ProductFilterItem = {
  group: ProductGroup;
  subGroup?: SubProductGroup;
} & FilterItem;
