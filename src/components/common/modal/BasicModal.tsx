import { Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from "@chakra-ui/react";

interface BasicModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const BasicModal: React.FC<BasicModalProps> = ({ isOpen, onClose, children }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay>
      <ModalContent maxW="1200px">
        <ModalHeader>{/* Modal Title */}</ModalHeader>
        <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  </Modal>
);

export default BasicModal;
