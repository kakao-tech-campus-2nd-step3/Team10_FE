import { Box, Image, Text, Flex } from "@chakra-ui/react";
import store4 from "@assets/Image/Store/Store4.png";

const PickupOrderList = () => (
  <Flex direction="row">
    <Box mt={30} ml={50}>
      <Image w="370px" h="210px" borderRadius="12px" alt="store4" src={store4} />
    </Box>
    <Flex direction="column">
      <Flex direction="row">
        <Text mt={50} ml={30} color="#000000" fontSize="24px" fontWeight="semibold">
          상품명
        </Text>
        <Text mt={50} ml={100} color="#000000" fontSize="24px" fontWeight="medium">
          건호네 고구마
        </Text>
      </Flex>
      <Flex direction="row">
        <Text mt={3} ml={8} color="#000000" fontSize="24px" fontWeight="semibold">
          가격
        </Text>
        <Text mt={3} ml={120} color="#000000" fontSize="24px" fontWeight="medium">
          9900원
        </Text>
      </Flex>
      <Flex direction="row">
        <Text mt={2} ml={8} color="#000000" fontSize="24px" fontWeight="semibold">
          수량
        </Text>
        <Text mt={2} ml={120} color="#000000" fontSize="24px" fontWeight="medium">
          3개
        </Text>
      </Flex>
      <Flex direction="row">
        <Text mt={2} ml={8} color="#000000" fontSize="24px" fontWeight="semibold">
          수거 예정일
        </Text>
        <Text mt={2} ml={50} color="#48BB78" fontSize="24px" fontWeight="medium">
          9/24
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default PickupOrderList;
