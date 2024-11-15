import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import Card, { CardProps } from "@components/common/Card";
import Image from "@components/common/Image";
import { Product } from "@type/index";

type CartProduct = {
  amount: number;
  checked: boolean;
  onChangeAmount: (amount: number) => void;
  onToggle: () => void;
} & Product;

type CartItemProps = {
  item: CartProduct;
} & CardProps;

const CartItem = ({ item, ...props }: CartItemProps) => (
  <Card h="150px" p="5" direction="row" gap="10" align="start" {...props}>
    <Checkbox my="auto" colorScheme="green" isChecked={item.checked} onChange={item.onToggle} />
    <Image h="100%" aspectRatio="1" src={item.mainImage} alt={item.name} />
    <Flex direction="column" w="50%" h="100%" py="2">
      <Text fontSize="xl" fontWeight="bold">
        {item.name}
      </Text>
      <Text mt="auto">배송비 : {item.deliveryFee}원</Text>
      <Text color="green.800" fontSize="lg" fontWeight="bold">
        {item.price}원
      </Text>
    </Flex>
    <Flex direction="column" gap="2" w="50px" h="100%" ml="auto">
      <Button
        color="white"
        bg={item.checked ? "green.800" : "gray.400"}
        _hover={{
          bg: item.checked ? "green.600" : "gray.400",
        }}
        cursor={item.checked ? "pointer" : "not-allowed"}
        onClick={() => item.checked && item.onChangeAmount(item.amount + 1)}
      >
        +
      </Button>
      <Text w="100%" textAlign="center">
        {item.amount}
      </Text>
      <Button
        color="white"
        bg={item.checked ? "green.800" : "gray.400"}
        _hover={{
          bg: item.checked ? "green.600" : "gray.400",
        }}
        cursor={item.checked ? "pointer" : "not-allowed"}
        onClick={() => item.checked && item.onChangeAmount(item.amount - 1 > 1 ? item.amount - 1 : 1)}
      >
        -
      </Button>
    </Flex>
  </Card>
);

export default CartItem;
