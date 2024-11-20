import { Divider, Flex, Text } from "@chakra-ui/react";
import { useGetProductCategories } from "@api/categoryApi";
import ProductGroupView from "@components/features/StorePage/ProductList/ProductFilter/ProductGroupView";
import productGroup from "@constants/productGroup";
import useFilters, { UseFilters } from "@hooks/useFilters";
import { encodeCategory } from "@utils/categoryParser";

type ProductFilterProps = {
  filterState?: UseFilters;
};

const ProductFilter = ({ filterState = useFilters() }: ProductFilterProps) => {
  const { data: productCategories } = useGetProductCategories();

  return (
    <Flex direction="column" w="250px" h="100%" pt="10">
      <Text w="full" py="5" fontSize="xl" fontWeight="bold">
        필터
      </Text>
      <Divider />
      {productGroup.map(group => (
        <ProductGroupView
          key={group.group}
          group={group}
          items={(productCategories || []).map(encodeCategory)}
          filterState={filterState}
        />
      ))}
    </Flex>
  );
};

export default ProductFilter;
