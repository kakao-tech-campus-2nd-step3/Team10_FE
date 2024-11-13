import { Flex } from "@chakra-ui/react";
import ProductFilter from "@components/features/StorePage/ProductList/ProductFilter";
import ProductsView from "@components/features/StorePage/ProductList/ProductsView";
import useFilters from "@hooks/useFilters";

const ProductList = () => {
  const productFilterState = useFilters();

  return (
    <Flex gap="5" w="100%" h="100vh">
      <ProductFilter
        filterState={productFilterState}
        items={[
          {
            label: "열매채소",
            value: "fruit_vege",
            group: "카테고리",
            subGroup: "채소",
          },
          {
            label: "뿌리채소",
            value: "root_vege",
            group: "카테고리",
            subGroup: "채소",
          },
          {
            label: "잎채소",
            value: "leaf_vege",
            group: "카테고리",
            subGroup: "채소",
          },
          {
            label: "기타채소",
            value: "etc_vege",
            group: "카테고리",
            subGroup: "채소",
          },
          {
            label: "열매과일",
            value: "fruit_fruit",
            group: "카테고리",
            subGroup: "과일",
          },
          {
            label: "통과일",
            value: "whole_fruit",
            group: "카테고리",
            subGroup: "과일",
          },
          {
            label: "새척과일",
            value: "peel_fruit",
            group: "카테고리",
            subGroup: "과일",
          },
          {
            label: "판매자배송",
            value: "delivery",
            group: "배송",
          },
          {
            label: "구매자픽업",
            value: "visit",
            group: "배송",
          },
        ]}
      />
      <Flex overflow="scroll" w="100%" h="100%">
        <ProductsView filters={productFilterState.filters} columns={3} gap="25px" />
      </Flex>
    </Flex>
  );
};

export default ProductList;
