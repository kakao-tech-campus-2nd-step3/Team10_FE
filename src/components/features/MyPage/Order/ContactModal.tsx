import React, { useState } from "react";
import { Flex, ModalBody, ModalHeader, ModalCloseButton, Button, Divider } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";
import ContactNumberModal from "./ContactNumberModal";
import RefundModal from "./RefundModal";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  maxW?: string;
  maxH?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, maxW = "600px", maxH = "400px" }) => {
  const [isContactNumberModalOpen, setContactNumberModalOpen] = useState(false);
  const [isRefundModalOpen, setRefundModalOpen] = useState(false);

  const handleOpenContactNumberModal = () => {
    setContactNumberModalOpen(true);
  };

  const handleCloseContactNumberModal = () => {
    setContactNumberModalOpen(false);
  };

  const handleOpenRefundModal = () => {
    setRefundModalOpen(true);
  };

  const handleCloseRefundModal = () => {
    setRefundModalOpen(false);
  };

  return (
    <BasicModal isOpen={isOpen} onClose={onClose} maxW={maxW} maxH={maxH}>
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
        <Flex justify="center" direction="row" gap="5px" mt={20} mb={20}>
          <Button
            w="230px"
            h="53px"
            color="#22543D"
            fontSize="24px"
            fontWeight="bold"
            borderWidth="1px"
            borderColor="#22543D"
            borderRadius="12px"
            _hover={{
              bgColor: "#FFFFFF",
              borderColor: "#22543D",
            }}
            bgColor="#FFFFFF"
            onClick={handleOpenContactNumberModal}
          >
            전화 문의
          </Button>
          <Button
            w="230px"
            h="53px"
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
            onClick={handleOpenRefundModal}
          >
            환불
          </Button>
        </Flex>
        <ContactNumberModal isOpen={isContactNumberModalOpen} onClose={handleCloseContactNumberModal} />
        <RefundModal isOpen={isRefundModalOpen} onClose={handleCloseRefundModal} />
      </ModalBody>
    </BasicModal>
  );
};

export default ContactModal;
