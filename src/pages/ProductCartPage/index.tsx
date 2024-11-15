import { useState } from "react";
import { Box, Button, Checkbox, Divider, Flex, Input, Text } from "@chakra-ui/react";
import ListView from "@components/ItemView/ListView";
import Card from "@components/common/Card";
import InputAddressWithMap from "@components/common/InputAddressWithMap";
import CartItem from "@components/features/ProductCartPage/CartItem";
import mockProducts from "@mocks/mockItem/mockProducts";

type ProductCartInfo = {
  productId: number;
  price: number;
  deliveryFee: number;
  amount: number;
  checked: boolean;
};

const ProductCartPage = () => {
  const [cartInfo, setCartInfo] = useState<ProductCartInfo[]>(
    mockProducts.map(p => ({
      productId: p.id,
      price: p.price,
      deliveryFee: p.deliveryFee,
      amount: 1,
      checked: false,
    })),
  );

  const [address, setAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");

  const productPriceSum = cartInfo.filter(ci => ci.checked).reduce((acc, cur) => acc + cur.price * cur.amount, 0);
  const deliveryFeeSum = cartInfo
    .filter(ci => ci.checked)
    .reduce((acc, cur) => (cur.checked ? acc + cur.deliveryFee : acc), 0);
  const totalPrice = productPriceSum + deliveryFeeSum;

  return (
    <Card mx="auto" my="10" w="1150px" title="장바구니">
      <Flex align="center" justify="space-between" w="100%" h="80px">
        <Checkbox
          color="green.800"
          colorScheme="green"
          onChange={e => setCartInfo(prev => prev.map(p => ({ ...p, checked: e.target.checked })))}
        >
          <Text>전체선택</Text>
        </Checkbox>
        <Button
          color="white"
          bg="green.800"
          _hover={{
            bg: "green.600",
          }}
        >
          선택 삭제
        </Button>
      </Flex>
      <ListView
        w="100%"
        h="500px"
        overflowY="scroll"
        items={mockProducts.map(p => ({
          ...p,
          amount: cartInfo.find(c => c.productId === p.id)?.amount || 1,
          checked: cartInfo.find(c => c.productId === p.id)?.checked || false,
          onChangeAmount: (amount: number) =>
            setCartInfo(prev => prev.map(c => (c.productId === p.id ? { ...c, amount } : c))),
          onToggle: () =>
            setCartInfo(prev => prev.map(c => (c.productId === p.id ? { ...c, checked: !c.checked } : c))),
        }))}
        ItemComponent={CartItem}
      />
      <Text fontSize="xl" fontWeight="bold">
        결제금액
      </Text>
      <Divider />
      <Flex direction="column" gap="5" py="5">
        <Text>상품금액 : {productPriceSum}원</Text>
        <Text>배송비 : {deliveryFeeSum}원</Text>
        <Text>총 결제 금액 : {totalPrice}원</Text>
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        배송지 입력
      </Text>
      <Divider />
      <Flex direction="column" gap="5" py="5">
        <Box>
          <Text>도로명 주소</Text>
          <InputAddressWithMap h="32px" address={address} onAddressChange={v => setAddress(v)} />
        </Box>
        <Box>
          <Text>상세 주소</Text>
          <Input w="250px" h="32px" onChange={e => setDetailAddress(e.target.value)} value={detailAddress} />
        </Box>
      </Flex>
      <Button
        w="200px"
        mx="auto"
        mt="10"
        py="5"
        color="white"
        bg="green.800"
        _hover={{
          bg: "green.600",
        }}
      >
        결제하기
      </Button>
    </Card>
  );
};

export default ProductCartPage;
