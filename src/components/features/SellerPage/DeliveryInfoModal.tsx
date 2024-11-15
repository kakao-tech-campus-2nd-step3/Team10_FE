import React from "react";
import { Flex, ModalBody, ModalHeader, ModalCloseButton, Button, Text, Divider, Input } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";

interface DeliveryInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  maxW?: string;
  maxH?: string;
}

const DeliveryInfoModal: React.FC<DeliveryInfoModalProps> = ({ isOpen, onClose, maxW = "800px", maxH = "500px" }) => (
  <BasicModal isOpen={isOpen} onClose={onClose} maxW={maxW} maxH={maxH}>
    <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
    <ModalHeader color="#22543D" fontSize="25px" fontWeight="bold">
      배송 정보 입력
    </ModalHeader>

    <ModalBody>
      <Flex direction="column">
        <Flex direction="row" mt={10}>
          <Flex direction="column">
            <Text ml={6} color="#000000" fontSize="28px" fontWeight="medium">
              택배사
            </Text>
            <Divider
              w="250px"
              mt={1}
              ml={6}
              borderWidth="0.5px"
              borderColor="rgba(56, 56, 56, 0.5)"
              orientation="horizontal"
            />
          </Flex>
          <Input
            w="350px"
            h="40px"
            mt={2}
            ml={10}
            p="10px"
            color="#06070c"
            fontSize="20px"
            fontWeight="medium"
            borderWidth="0.7px"
            borderColor="#000000"
            borderRadius="12px"
            _focus={{
              outline: "none",
              border: "0.7px solid #22543D",
            }}
            bgColor="#FFFFFF"
          />
        </Flex>

        <Flex direction="row" mt={10}>
          <Flex direction="column">
            <Text ml={6} color="#000000" fontSize="28px" fontWeight="medium">
              송장 번호
            </Text>
            <Divider
              w="250px"
              mt={1}
              ml={6}
              borderWidth="0.5px"
              borderColor="rgba(56, 56, 56, 0.5)"
              orientation="horizontal"
            />
          </Flex>
          <Input
            w="350px"
            h="40px"
            mt={3}
            ml={10}
            p="10px"
            color="#06070c"
            fontSize="20px"
            fontWeight="medium"
            borderWidth="0.7px"
            borderColor="#000000"
            borderRadius="12px"
            _focus={{
              outline: "none",
              border: "0.7px solid #22543D",
            }}
            bgColor="#FFFFFF"
          />
        </Flex>
        <Flex align="center" justify="center">
          <Button
            w="230px"
            h="53px"
            mt={10}
            mb={10}
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
            접수하기
          </Button>
        </Flex>
      </Flex>
    </ModalBody>
  </BasicModal>
);

export default DeliveryInfoModal;
