import { Link } from "react-router-dom";
import { HeartOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";
import { Text, Flex, Box, Icon, Link as ChakraLink } from "@chakra-ui/react";

const Category = () => (
  <Box pos="sticky" top="10" flexShrink="1" w="330px" h="800px" border="none" borderRadius="20px" bgColor="#FFFFFF">
    <Flex direction="column">
      <Flex direction="row" mt={10} ml={5}>
        <Icon as={HeartOutlined} color="#22543D" fontSize="25px" />
        <Text ml={3} color="#000000" fontSize="20px" fontWeight="bold">
          위시리스트
        </Text>
      </Flex>
      <ChakraLink
        as={Link}
        w="100px"
        h="20px"
        mt={3}
        ml={5}
        color="#5C5C5C"
        fontSize="16px"
        fontWeight="medium"
        to="/me/product-wish"
      >
        위시리스트
      </ChakraLink>
      <Flex direction="row" mt={10} ml={5}>
        <Icon as={ProfileOutlined} color="#22543D" fontSize="25px" />
        <Text ml={3} color="#000000" fontSize="20px" fontWeight="bold">
          주문 관리
        </Text>
      </Flex>
      <ChakraLink
        as={Link}
        w="95px"
        h="20px"
        mt={3}
        ml={5}
        color="#5C5C5C"
        fontSize="16px"
        fontWeight="medium"
        to="/me/orders"
      >
        상품 주문 내역
      </ChakraLink>
      <ChakraLink
        as={Link}
        w="95px"
        h="20px"
        mt={1}
        ml={5}
        color="#5C5C5C"
        fontSize="16px"
        fontWeight="medium"
        to="/me/farm-list"
      >
        농장 체험 내역
      </ChakraLink>
      <ChakraLink
        as={Link}
        w="68px"
        h="20px"
        mt={1}
        ml={5}
        color="#5C5C5C"
        fontSize="16px"
        fontWeight="medium"
        to="/me/review-list"
      >
        리뷰 관리
      </ChakraLink>
      <Flex direction="row" mt={10} ml={5}>
        <Icon as={UserOutlined} color="#22543D" fontSize="25px" />
        <Text ml={3} color="#000000" fontSize="20px" fontWeight="bold">
          정보 관리
        </Text>
      </Flex>
      <ChakraLink
        as={Link}
        w="83px"
        h="20px"
        mt={3}
        ml={5}
        color="#5C5C5C"
        fontSize="16px"
        fontWeight="medium"
        to="/me/delivery"
      >
        배송지 수정
      </ChakraLink>
      <ChakraLink
        as={Link}
        w="88px"
        h="20px"
        mt={1}
        ml={5}
        color="#5C5C5C"
        fontSize="16px"
        fontWeight="medium"
        to="/me/my-info"
      >
        내 정보 수정
      </ChakraLink>
      <ChakraLink
        as={Link}
        w="68px"
        h="20px"
        mt={1}
        ml={5}
        color="#5C5C5C"
        fontSize="16px"
        fontWeight="medium"
        to="/me/withdraw"
      >
        회원 탈퇴
      </ChakraLink>
    </Flex>
  </Box>
);

export default Category;
