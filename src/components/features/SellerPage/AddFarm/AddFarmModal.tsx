import React from "react";
import { ModalHeader, ModalCloseButton, Tabs, TabList, Tab, TabPanel, TabPanels, Button } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";
import ProductDescription from "@components/features/StoreDetailPage/ProductDescription";
import AddInfo, { AddInfoProps } from "./AddInfo";

interface AddFarmModalProps {
  infoProps: AddInfoProps;
  isOpen: boolean;
  onClose: () => void;
  maxW?: string;
  maxH?: string;
}

const AddFarmModal: React.FC<AddFarmModalProps> = ({ infoProps, isOpen, onClose, maxW = "1200px", maxH = "950px" }) => (
  <BasicModal isOpen={isOpen} onClose={onClose} maxW={maxW} maxH={maxH}>
    <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
    <ModalHeader>
      <Tabs ml={5}>
        <TabList w="1050px">
          <Tab _selected={{ color: "#22543D", fontSize: "30px", fontWeight: "bold", bg: "none" }}>Write</Tab>
          <Tab _selected={{ color: "#22543D", fontSize: "30px", fontWeight: "bold", bg: "none" }}>Preview</Tab>
        </TabList>

        <TabPanels py="10px">
          <TabPanel>
            <AddInfo {...infoProps} />
            <Button
              w="200px"
              h="50px"
              mt={5}
              ml={850}
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
              onClick={onClose}
            >
              돌아가기
            </Button>
          </TabPanel>
          <TabPanel>
            <ProductDescription />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ModalHeader>
  </BasicModal>
);

export default AddFarmModal;
