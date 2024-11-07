import { Flex, Input, Text, Divider } from "@chakra-ui/react";

const PriceInfo = () => (
  <Flex direction="column">
    <Text mt={20} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
      가격 정보
    </Text>
    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        가격
      </Text>
      <Input
        w="200px"
        h="35px"
        mt="30px"
        ml="520px"
        p="10px"
        color="#06070c"
        fontSize="20px"
        fontWeight="medium"
        border="none"
        borderRadius="10px"
        _focus={{
          outline: "none",
          border: "0.5px solid #22543D",
        }}
        _placeholder={{ color: "transparent" }}
        bgColor="#F5F5F5"
      />
      <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
        원
      </Text>
    </Flex>
    <Divider w="550px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        최대 수량
      </Text>
      <Input
        w="100px"
        h="35px"
        mt="30px"
        ml="565px"
        p="10px"
        color="#06070c"
        fontSize="20px"
        fontWeight="medium"
        border="none"
        borderRadius="10px"
        _focus={{
          outline: "none",
          border: "0.5px solid #22543D",
        }}
        _placeholder={{ color: "transparent" }}
        bgColor="#F5F5F5"
      />
      <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
        개
      </Text>
    </Flex>
    <Divider w="650px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        배송비
      </Text>
      <Input
        w="200px"
        h="35px"
        mt="30px"
        ml="495px"
        p="10px"
        color="#06070c"
        fontSize="20px"
        fontWeight="medium"
        border="none"
        borderRadius="10px"
        _focus={{
          outline: "none",
          border: "0.5px solid #22543D",
        }}
        _placeholder={{ color: "transparent" }}
        bgColor="#F5F5F5"
      />
      <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
        원
      </Text>
    </Flex>
    <Divider w="550px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
  </Flex>
);

export default PriceInfo;
