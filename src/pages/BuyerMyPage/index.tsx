import { Divider, Text, Flex } from "@chakra-ui/react";
import OrderList from "@components/features/BuyerMyPage/OrderList";
import Pay from "@components/features/BuyerMyPage/Pay";
import ReviewList from "@components/features/BuyerMyPage/ReviewList";

const BuyerMyPage = () => (
  <>
    <Flex direction="row">
      <Text mt={5} ml={50} color="#383838" fontSize="36px" fontWeight="extrabold">
        안녕하세요
      </Text>
      <Text mt={5} ml={3} color="#48BB78" fontSize="36px" fontWeight="extrabold">
        이경서
      </Text>
      <Text mt={5} color="#383838" fontSize="36px" fontWeight="extrabold">
        님
      </Text>
    </Flex>

    <Text mt={10} ml={50} color="#383838" fontSize="32px" fontWeight="extrabold">
      구매 목록
    </Text>
    <Divider w="1050px" mt={3} ml={50} borderWidth="1px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    <Flex direction="column" mt={30}>
      <OrderList />
      <OrderList />
      <OrderList />
    </Flex>
    <Divider
      w="1050px"
      mt={10}
      ml={50}
      borderWidth="1px"
      borderColor="rgba(56, 56, 56, 0.5)"
      orientation="horizontal"
    />
    <Pay />
    <Text mt={20} ml={50} color="#383838" fontSize="32px" fontWeight="extrabold">
      내가 쓴 리뷰
    </Text>
    <Divider w="1050px" mt={3} ml={50} borderWidth="1px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    <ReviewList />
  </>
);

export default BuyerMyPage;
