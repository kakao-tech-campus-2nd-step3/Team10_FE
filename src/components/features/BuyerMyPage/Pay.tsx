import { Button, Text, Flex } from "@chakra-ui/react";

const Pay = () => (
  <Flex direction="row" mt={10}>
    <Flex direction="row">
      <Text ml={50} color="#000000" fontSize="24px" fontWeight="bold">
        배송비
      </Text>
      <Text ml={3} color="#000000" fontSize="24px" fontWeight="medium">
        3000원
      </Text>
      <Text ml={5} color="#000000" fontSize="24px" fontWeight="medium">
        +
      </Text>
    </Flex>
    <Flex direction="row">
      <Text ml={5} color="#000000" fontSize="24px" fontWeight="bold">
        총 가격
      </Text>
      <Text ml={3} color="#000000" fontSize="24px" fontWeight="medium">
        39700원
      </Text>
      <Text ml={5} color="#000000" fontSize="24px" fontWeight="medium">
        =
      </Text>
    </Flex>
    <Flex direction="row">
      <Text ml={5} color="#000000" fontSize="24px" fontWeight="bold">
        42700원
      </Text>
    </Flex>
    <Button
      w="169px"
      h="40px"
      ml={20}
      color="#FFFFFF"
      fontSize="24px"
      fontWeight="bold"
      borderRadius="12px"
      _hover={{ bgColor: "#48BB78" }}
      _active={{ bgColor: "#48BB78" }}
      bgColor="#48BB78"
    >
      결제하기
    </Button>
  </Flex>
);

export default Pay;
