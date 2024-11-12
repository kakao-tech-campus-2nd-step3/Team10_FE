import { Flex, Text } from "@chakra-ui/react";
import ProductFilterItemView from "@components/features/StorePage/ProductList/ProductFilter/ProductFilterItemView";
import { ProductFilterItem } from "@components/features/StorePage/ProductList/ProductFilter/type";
import { ProductGroupItem } from "@constants/productGroup";
import { UseFilters } from "@hooks/useFilters";

export type ProductGroupViewProps = {
  group: ProductGroupItem;
  items: ProductFilterItem[];
  filterState: UseFilters;
};

const ProductGroupView = ({ group, items, filterState }: ProductGroupViewProps) => {
  const haveSubGroup = group.subGroup.length > 0;

  let seperatedFilters: ProductFilterItem[][] = [items.filter(item => item.group === group.group)];

  if (haveSubGroup) {
    seperatedFilters = group.subGroup.map(sub => seperatedFilters[0].filter(item => item.subGroup === sub));
  }

  return (
    <Flex direction="column" w="300px">
      <Text w="full" pt="4" pb="2" fontSize="lg" fontWeight="bold">
        {group.group}
      </Text>
      {haveSubGroup
        ? group.subGroup.map(
            (sub, index) =>
              seperatedFilters[index].length > 0 && [
                <Text key={sub} w="full" py="2" color="#999999" fontSize="md">
                  {sub}
                </Text>,
                ...seperatedFilters[index].map(item => (
                  <ProductFilterItemView key={item.label} item={item} filterState={filterState} />
                )),
              ],
          )
        : [
            ...seperatedFilters[0].map(item => (
              <ProductFilterItemView key={item.label} item={item} filterState={filterState} />
            )),
          ]}
    </Flex>
  );
};

export default ProductGroupView;
