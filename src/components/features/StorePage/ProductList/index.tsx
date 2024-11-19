import { Flex } from "@chakra-ui/react";
import ProductFilter from "@components/features/StorePage/ProductList/ProductFilter";
import ProductsView from "@components/features/StorePage/ProductList/ProductsView";
import useFilters from "@hooks/useFilters";
import mockCategory from "@mocks/mockItem/mockCategory";
import { encodeCategory } from "@utils/categoryParser";

const ProductList = () => {
  const productFilterState = useFilters();

  return (
    <Flex gap="5" w="100%" h="100vh">
      <ProductFilter filterState={productFilterState} items={mockCategory.map(encodeCategory)} />
      <Flex overflow="scroll" w="100%" h="100%">
        <ProductsView filters={productFilterState.filters} py="10" columns={3} gap="25px" />
      </Flex>
    </Flex>
  );
};

export default ProductList;
