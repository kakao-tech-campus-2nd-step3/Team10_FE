import { Link } from "react-router-dom";
import { Text, Flex, Box, Link as ChakraLink } from "@chakra-ui/react";

const SellerCategory = () => (
  <Box w="230px" h="100%" border="none" bgColor="#FFFFFF">
    <Flex direction="column" gap="10" p="5">
      <Flex direction="column" gap="2">
        <Text color="#000000" fontSize="20px" fontWeight="bold">
          할 일
        </Text>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/recent-orders"
        >
          최근 주문 관리
        </ChakraLink>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/sold-outs"
        >
          품절된 상품
        </ChakraLink>
      </Flex>

      <Flex direction="column" gap="2">
        <Text color="#000000" fontSize="20px" fontWeight="bold">
          판매 분석
        </Text>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/tax-calculator"
        >
          세금 계산기
        </ChakraLink>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/biz-reg"
        >
          사업자 등록
        </ChakraLink>
      </Flex>

      <Flex direction="column" gap="2">
        <Text color="#000000" fontSize="20px" fontWeight="bold">
          농산물 홈
        </Text>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/product-reg"
        >
          농산물 등록
        </ChakraLink>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/product-edit"
        >
          농산물 수정
        </ChakraLink>
      </Flex>

      <Flex direction="column" gap="2">
        <Text color="#000000" fontSize="20px" fontWeight="bold">
          농장 홈
        </Text>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/farm-reg"
        >
          농장 등록
        </ChakraLink>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/farm-edit"
        >
          농장 수정
        </ChakraLink>
      </Flex>

      <Flex direction="column" gap="2">
        <Text color="#000000" fontSize="20px" fontWeight="bold">
          정보 관리
        </Text>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/my-info"
        >
          내 정보 수정
        </ChakraLink>
        <ChakraLink
          as={Link}
          h="20px"
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          to="/seller/withdraw"
        >
          회원 탈퇴
        </ChakraLink>
      </Flex>
    </Flex>
  </Box>
);

export default SellerCategory;
