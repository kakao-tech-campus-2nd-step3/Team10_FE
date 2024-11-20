import { Box } from "@chakra-ui/react";
import GridView from "@components/ItemView/GridView";
import Card from "@components/common/Card";
import ProductCard from "@components/features/StorePage/ProductCard";
import mockProducts from "@mocks/mockItem/mockProducts";

const SellerProductListPage = () => (
  <Card mx="auto" bg="white" w="1000px" p="10" h="100%" title="등록된 상품">
    <Box overflowY="scroll" w="100%" h="100%" p="5">
      <GridView
        items={mockProducts.map(p => ({
          ...p,
          link: `/seller/product-edit/${p.id}`,
        }))}
        ItemComponent={ProductCard}
        columns={3}
        gap="10"
      />
    </Box>
  </Card>
);

export default SellerProductListPage;
