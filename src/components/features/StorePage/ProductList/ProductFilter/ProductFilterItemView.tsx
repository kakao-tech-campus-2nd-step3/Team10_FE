/* eslint-disable @typescript-eslint/no-empty-function */

import { Checkbox, Flex } from "@chakra-ui/react";
import { ProductFilterItem } from "@components/features/StorePage/ProductList/ProductFilter/type";
import { UseFilters } from "@hooks/useFilters";

type ProductFilterItemViewProps = {
  item: ProductFilterItem;
  filterState: UseFilters;
};

const ProductFilterItemView = ({ item, filterState }: ProductFilterItemViewProps) => (
  <Flex direction="column" w="300px" h="100%">
    <Checkbox
      isChecked={filterState.findFilter(item)}
      onChange={() => {
        filterState.toggleFilter(item);
      }}
    >
      {item.label}
    </Checkbox>
  </Flex>
);

export default ProductFilterItemView;
