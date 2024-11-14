import React, { useState, useEffect } from "react";
import { Flex, ModalBody, ModalHeader, ModalCloseButton, Button, Text, Divider } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";
import useGetProduct from "./useGetProduct";

interface CancelOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  maxW?: string;
  maxH?: string;
  productId: number;
}

const CancelOrderModal: React.FC<CancelOrderModalProps> = ({
  isOpen,
  onClose,
  maxW = "600px",
  maxH = "800px",
  productId,
}) => {
  const { data: productData } = useGetProduct(productId);

  const [totalRefundAmount, setTotalRefundAmount] = useState(0);

  useEffect(() => {
    if (productData) {
      const price = parseFloat(productData.price);
      const stock = parseFloat(productData.stock);
      const shippingFee = parseFloat(productData.shippingFee);
      setTotalRefundAmount(price * stock + shippingFee);
    }
  }, [productData]);

  return (
    <BasicModal isOpen={isOpen} onClose={onClose} maxW={maxW} maxH={maxH}>
      <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
      <ModalHeader color="#22543D" fontSize="25px" fontWeight="bold">
        주문 취소
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
          <Flex justify="space-between" direction="row" mt={10} mr={70}>
            <Text color="#000000" fontSize="28px" fontWeight="medium">
              주문 취소 상품 금액
            </Text>
            <Text color="#000000" fontSize="28px" fontWeight="medium">
              {productData?.price.toLocaleString()}원
            </Text>
          </Flex>
          <Flex justify="space-between" direction="row" mt={5} mr={70}>
            <Text color="#000000" fontSize="28px" fontWeight="medium">
              수량
            </Text>
            <Text color="#000000" fontSize="28px" fontWeight="medium">
              {productData?.stock.toLocaleString()}개
            </Text>
          </Flex>
          <Flex justify="space-between" direction="row" mt={5} mr={70}>
            <Text color="#000000" fontSize="28px" fontWeight="medium">
              배송비
            </Text>
            <Text color="#000000" fontSize="28px" fontWeight="medium">
              {productData?.shippingFee.toLocaleString()}원
            </Text>
          </Flex>
          <Divider w="430px" mt={2} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

          <Flex justify="space-between" direction="row" mt={5} mr={70}>
            <Text color="#000000" fontSize="28px" fontWeight="bold">
              총 주문 취소 금액
            </Text>
            <Text color="#000000" fontSize="28px" fontWeight="bold">
              {totalRefundAmount.toLocaleString()}원
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
            주문 취소하기
          </Button>
        </Flex>
      </ModalBody>
    </BasicModal>
  );
};

export default CancelOrderModal;
