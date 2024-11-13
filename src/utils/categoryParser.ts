import { ProductFilterItem } from "@components/features/StorePage/ProductList/ProductFilter/type";
import { ProductGroup } from "@constants/productGroup";
import { Category } from "@type/index";

export const encodeCategory = (category: Category): ProductFilterItem => {
  const [group, label] = category.name.split("_");
  return {
    label,
    value: category.id.toString(),
    group: group as ProductGroup,
  };
};

export const decodeCategory = (item: ProductFilterItem): Category => ({
  id: Number(item.value),
  name: `${item.group}_${item.label}`,
});
