import React from "react";
import { Flex, ModalBody, ModalHeader, ModalCloseButton, Text, Divider } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => (
  <BasicModal isOpen={isOpen} onClose={onClose}>
    <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
    <ModalHeader color="#22543D" fontSize="25px" fontWeight="bold">
      문의
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
      <Flex direction="column" mt={3}>
        <Text color="#000000" fontSize="30px" fontWeight="bold">
          010-1234-1234
        </Text>
        <Text mb={10} color="#000000" fontSize="20px" fontWeight="medium">
          위의 전화번호로 문의 바랍니다.
        </Text>
      </Flex>
    </ModalBody>
  </BasicModal>
);

export default ContactModal;
