import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import GridView from "@components/ItemView/GridView";
import Card from "@components/common/Card";
import ProductCard, { ProductCardProps } from "@components/features/StorePage/ProductCard";
import mockProducts from "@mocks/mockItem/mockProducts";

const EditProductCard = (props: ProductCardProps) => {
  const navigate = useNavigate();
  return <ProductCard {...props} onClick={() => navigate(`/seller/product-edit/${props?.item.id}`)} />;
};

const SellerProductListPage = () => (
  <Card mx="auto" bg="white" w="1000px" p="10" h="100%" title="등록된 상품">
    <Box overflowY="scroll" w="100%" h="100%" p="5">
      <GridView items={mockProducts} ItemComponent={EditProductCard} columns={3} gap="10" />
    </Box>
  </Card>
);

export default SellerProductListPage;
