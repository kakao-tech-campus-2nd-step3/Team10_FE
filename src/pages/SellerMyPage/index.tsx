import { Divider, Text, Flex, Button } from "@chakra-ui/react";
import CompletedDeliveryList from "@components/features/SellerMyPage/CompletedDeliveryList";
import DeliveryOrderList from "@components/features/SellerMyPage/DeliveryOrderList";
import PickupOrderList from "@components/features/SellerMyPage/PickupOrderList";
import ReturnOrderList from "@components/features/SellerMyPage/ReturnOrderList";

const SellerMyPage = () => (
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
    <Flex direction="row">
      <Button
        w="300px"
        h="50px"
        mt={5}
        ml={50}
        color="#48BB78"
        fontSize="32px"
        fontWeight="semibold"
        borderWidth="0.3px"
        borderColor="#000000"
        borderRadius="12px"
        _hover={{ bgColor: "#FFFFFF" }}
        _active={{ bgColor: "#FFFFFF" }}
        bgColor="#FFFFFF"
      >
        내 상점 바로가기
      </Button>
      <Button
        w="300px"
        h="50px"
        mt={5}
        ml={5}
        color="#48BB78"
        fontSize="32px"
        fontWeight="semibold"
        borderWidth="0.3px"
        borderColor="#000000"
        borderRadius="12px"
        _hover={{ bgColor: "#FFFFFF" }}
        _active={{ bgColor: "#FFFFFF" }}
        bgColor="#FFFFFF"
      >
        내 농장 바로가기
      </Button>
    </Flex>

    <Text mt={10} ml={50} color="#383838" fontSize="32px" fontWeight="extrabold">
      주문 내역
    </Text>
    <Divider w="1050px" mt={2} ml={50} borderWidth="1px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

    <Text mt={5} mb={-5} ml={50} color="#48BB78" fontSize="30px" fontWeight="extrabold">
      택배
    </Text>
    <DeliveryOrderList />

    <Text mt={5} mb={-5} ml={50} color="#48BB78" fontSize="30px" fontWeight="extrabold">
      직접 수거
    </Text>
    <PickupOrderList />

    <Text mt={10} ml={50} color="#383838" fontSize="32px" fontWeight="extrabold">
      배송 완료 내역
    </Text>
    <Divider
      w="1050px"
      mt={2}
      mb={5}
      ml={50}
      borderWidth="1px"
      borderColor="rgba(56, 56, 56, 0.5)"
      orientation="horizontal"
    />
    <CompletedDeliveryList />

    <Text mt={10} ml={50} color="#383838" fontSize="32px" fontWeight="extrabold">
      반품 내역
    </Text>
    <Divider
      w="1050px"
      mt={2}
      mb={5}
      ml={50}
      borderWidth="1px"
      borderColor="rgba(56, 56, 56, 0.5)"
      orientation="horizontal"
    />
    <ReturnOrderList />
  </>
);

export default SellerMyPage;
