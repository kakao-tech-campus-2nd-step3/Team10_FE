import { Flex, Button, Text, Box, Alert, Spinner } from "@chakra-ui/react";
import { useDeleteWishlists, useGetWishlists } from "@api/wishlistApi";
import farm1 from "@assets/Image/Farm/Farm1.png";
import Image from "@components/common/Image";

type Product = {
  id: number;
  name: string;
  tag: string;
  price: number;
  deliveryFee: number;
};

const ProductWish = () => {
  const { data: wishlists, isLoading, refetch } = useGetWishlists();
  const { mutate: deleteWishlist } = useDeleteWishlists();

  const handleDelete = (wishlistId: number) => {
    deleteWishlist(wishlistId, {
      onSuccess: () => {
        <Alert title="해당 상품이 위시리스트에서 삭제되었습니다." />;
        refetch();
      },
      onError: () => {
        <Alert title="삭제에 실패했습니다. 다시 시도해주세요." />;
      },
    });
  };

  if (isLoading) {
    return <Spinner color="#22543D" size="xl" />;
  }

  return (
    <Flex direction="column">
      {wishlists?.map((product: Product) => (
        <Flex direction="row" gap="10px">
          <Image mt={3} w="150px" borderRadius="xl" h="150px" src={farm1} alt="Farm image" />
          <Flex justify="space-between" flex="1">
            <Flex justify="center" direction="column">
              <Flex direction="row">
                <Text color="#000000" fontSize="20px" fontWeight="bold">
                  {product.name}
                </Text>
                <Box as={Flex} justify="center" w="70px" h="25px" mt={1} ml={5} borderRadius="12px" bgColor="#22543D">
                  <Text color="#FFFFFF" fontSize="16px" fontWeight="medium">
                    {product.tag}
                  </Text>
                </Box>
              </Flex>

              <Flex direction="row">
                <Text color="#000000" fontSize="16px" fontWeight="bold">
                  가격:
                </Text>
                <Text ml={2} color="#22543D" fontSize="16px" fontWeight="bold">
                  {product.price.toLocaleString()}
                </Text>
                <Text color="#000000" fontSize="16px" fontWeight="bold">
                  원
                </Text>
              </Flex>

              <Flex direction="row">
                <Text color="#000000" fontSize="16px" fontWeight="bold">
                  배송비:
                </Text>
                <Text ml={2} color="#22543D" fontSize="16px" fontWeight="bold">
                  {product.deliveryFee}
                </Text>
                <Text color="#000000" fontSize="16px" fontWeight="bold">
                  원
                </Text>
              </Flex>
            </Flex>
            <Flex justify="center" direction="column" gap="10px">
              <Button
                w="200px"
                h="45px"
                color="#22543D"
                fontSize="20px"
                fontWeight="bold"
                borderWidth="1px"
                borderColor="#22543D"
                borderRadius="12px"
                _hover={{ bgColor: "#FFFFFF" }}
                bgColor="#FFFFFF"
                onClick={() => handleDelete(product.id)}
              >
                삭제
              </Button>
              <Button
                w="200px"
                h="45px"
                color="#FFFFFF"
                fontSize="20px"
                fontWeight="bold"
                borderWidth="1px"
                borderColor="#22543D"
                borderRadius="12px"
                _hover={{ bgColor: "#22543D" }}
                bgColor="#22543D"
              >
                장바구니
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default ProductWish;
