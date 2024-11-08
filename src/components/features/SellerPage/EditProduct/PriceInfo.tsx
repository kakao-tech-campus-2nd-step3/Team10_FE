import { Flex, Button, Text, Divider } from "@chakra-ui/react";

const PriceInfo = () => (
  <Flex direction="column">
    <Text mt={20} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
      가격 정보
    </Text>
    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        가격
      </Text>
      <Text mt={5} ml={32} color="#000000" fontSize="25px" fontWeight="medium">
        27,600원
      </Text>
      <Button
        w="100px"
        h="40px"
        mt={5}
        ml={430}
        color="#5C5C5C"
        fontSize="25px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#000000"
        borderRadius="40px"
        _hover={{
          bgColor: "#FFFFFF",
          borderColor: "#000000",
        }}
        bgColor="#FFFFFF"
      >
        수정
      </Button>
    </Flex>
    <Divider w="690px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        최대 수량
      </Text>
      <Text mt={5} ml={71} color="#000000" fontSize="25px" fontWeight="medium">
        30개
      </Text>
      <Button
        w="100px"
        h="40px"
        mt={5}
        ml={480}
        color="#5C5C5C"
        fontSize="25px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#000000"
        borderRadius="40px"
        _hover={{
          bgColor: "#FFFFFF",
          borderColor: "#000000",
        }}
        bgColor="#FFFFFF"
      >
        수정
      </Button>
    </Flex>
    <Divider w="690px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        배송비
      </Text>
      <Text mt={5} ml={24} color="#000000" fontSize="25px" fontWeight="medium">
        무료배송
      </Text>
      <Button
        w="100px"
        h="40px"
        mt={5}
        ml={450}
        color="#5C5C5C"
        fontSize="25px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#000000"
        borderRadius="40px"
        _hover={{
          bgColor: "#FFFFFF",
          borderColor: "#000000",
        }}
        bgColor="#FFFFFF"
      >
        수정
      </Button>
    </Flex>
    <Divider w="690px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
  </Flex>
);

export default PriceInfo;
