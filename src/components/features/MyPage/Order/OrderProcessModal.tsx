import React from "react";
import { Flex, ModalBody, ModalHeader, ModalCloseButton, Text, Divider } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";

interface OrderProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "pending" | "deliver-start" | "delivering" | "delivered";
}

const OrderProcessModal: React.FC<OrderProcessModalProps> = ({ isOpen, onClose, status }) => (
  <BasicModal isOpen={isOpen} onClose={onClose}>
    <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
    <ModalHeader color="#22543D" fontSize="25px" fontWeight="bold">
      기본 정보
    </ModalHeader>
    <Divider
      w="430px"
      mt={-3}
      ml={6}
      borderWidth="0.5px"
      borderColor="rgba(56, 56, 56, 0.5)"
      orientation="horizontal"
    />
    <Flex direction="row" mt={3} ml={6}>
      <Text mr={30} color="#000000" fontSize="18px" fontWeight="bold">
        품목
      </Text>
      <Text color="#000000" fontSize="18px" fontWeight="medium">
        건호네 미나리
      </Text>
    </Flex>
    <Flex direction="row" mt={1} ml={6}>
      <Text mr={30} color="#000000" fontSize="18px" fontWeight="bold">
        수량
      </Text>
      <Text color="#000000" fontSize="18px" fontWeight="medium">
        3
      </Text>
    </Flex>

    <ModalBody>
      <Text mt={5} color="#22543D" fontSize="25px" fontWeight="bold">
        배송 현황
      </Text>
      <Divider w="430px" mt={1} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
      <Flex direction="row" mt={3}>
        <Text mr={5} color={status === "pending" ? "#48BB78" : "#D9D9D9"} fontSize="18px" fontWeight="bold">
          준비 중
        </Text>
        <Text mr={5} color="#D9D9D9" fontSize="18px" fontWeight="bold">
          {">"}
        </Text>
        <Text mr={5} color={status === "deliver-start" ? "#48BB78" : "#D9D9D9"} fontSize="18px" fontWeight="bold">
          배송 시작
        </Text>
        <Text mr={5} color="#D9D9D9" fontSize="18px" fontWeight="bold">
          {">"}
        </Text>
        <Text mr={5} color={status === "delivering" ? "#48BB78" : "#D9D9D9"} fontSize="18px" fontWeight="bold">
          배송 중
        </Text>
        <Text mr={5} color="#D9D9D9" fontSize="18px" fontWeight="bold">
          {">"}
        </Text>
        <Text mr={5} color={status === "delivered" ? "#48BB78" : "#D9D9D9"} fontSize="18px" fontWeight="bold">
          배송 완료
        </Text>
      </Flex>

      <Text mt={5} color="#22543D" fontSize="25px" fontWeight="bold">
        배송 정보
      </Text>
      <Divider w="430px" mt={1} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
      <Flex direction="row" mt={3}>
        <Text mr={45} color="#000000" fontSize="18px" fontWeight="bold">
          택배사
        </Text>
        <Text color="#000000" fontSize="18px" fontWeight="medium">
          CJ 대한통운
        </Text>
      </Flex>
      <Flex direction="row" mt={1}>
        <Text mr={30} mb={10} color="#000000" fontSize="18px" fontWeight="bold">
          송장번호
        </Text>
        <Text color="#000000" fontSize="18px" fontWeight="medium">
          323732943
        </Text>
      </Flex>
    </ModalBody>
  </BasicModal>
);

export default OrderProcessModal;
