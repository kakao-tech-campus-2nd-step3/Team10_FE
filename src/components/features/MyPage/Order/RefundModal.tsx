import React from "react";
import { Flex, ModalBody, ModalHeader, ModalCloseButton, Button, Text, Divider } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";

interface RefundModalProps {
  isOpen: boolean;
  onClose: () => void;
  maxW?: string;
  maxH?: string;
}

const RefundModal: React.FC<RefundModalProps> = ({ isOpen, onClose, maxW = "600px", maxH = "800px" }) => (
  <BasicModal isOpen={isOpen} onClose={onClose} maxW={maxW} maxH={maxH}>
    <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
    <ModalHeader color="#22543D" fontSize="25px" fontWeight="bold">
      환불
    </ModalHeader>
    <Divider
      w="430px"
      mt={-3}
      ml={6}
      borderWidth="0.5px"
      borderColor="rgba(56, 56, 56, 0.5)"
      orientation="horizontal"
    />

    <ModalBody>
      <Flex justify="center" direction="column">
        <Flex direction="row" mt={10}>
          <Text ml={2} color="#000000" fontSize="28px" fontWeight="medium">
            환불 상품 금액
          </Text>
          <Text ml={99} color="#000000" fontSize="28px" fontWeight="medium">
            23,000원
          </Text>
        </Flex>
        <Flex direction="row" mt={2}>
          <Text ml={2} color="#000000" fontSize="28px" fontWeight="medium">
            배송비
          </Text>
          <Text ml={200} color="#000000" fontSize="28px" fontWeight="medium">
            2,000원
          </Text>
        </Flex>
        <Divider
          w="380px"
          mt={2}
          ml={2}
          borderWidth="0.5px"
          borderColor="rgba(56, 56, 56, 0.5)"
          orientation="horizontal"
        />

        <Flex direction="row" mt={5}>
          <Text ml={2} color="#000000" fontSize="28px" fontWeight="bold">
            총 환불 금액
          </Text>
          <Text ml={120} color="#000000" fontSize="28px" fontWeight="bold">
            25,000원
          </Text>
        </Flex>
        <Button
          w="230px"
          h="53px"
          mt={10}
          mb={10}
          ml={130}
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="bold"
          borderWidth="1px"
          borderColor="#22543D"
          borderRadius="12px"
          _hover={{
            bgColor: "#22543D",
            borderColor: "#22543D",
          }}
          bgColor="#22543D"
        >
          환불하기
        </Button>
      </Flex>
    </ModalBody>
  </BasicModal>
);

export default RefundModal;
