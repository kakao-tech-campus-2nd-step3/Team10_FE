import { Divider, Flex, Text } from "@chakra-ui/react";
import ProductGroupView from "@components/features/StorePage/ProductList/ProductFilter/ProductGroupView";
import { ProductFilterItem } from "@components/features/StorePage/ProductList/ProductFilter/type";
import productGroup from "@constants/productGroup";
import useFilters, { UseFilters } from "@hooks/useFilters";

type ProductFilterProps = {
  items?: ProductFilterItem[];
  filterState?: UseFilters;
};

const ProductFilter = ({ items = [], filterState = useFilters() }: ProductFilterProps) => (
  <Flex direction="column" w="250px" h="100%" pt="10">
    <Text w="full" py="5" fontSize="xl" fontWeight="bold">
      필터
    </Text>
    <Divider />
    {productGroup.map(group => (
      <ProductGroupView key={group.group} group={group} items={items} filterState={filterState} />
    ))}
  </Flex>
);

export default ProductFilter;
