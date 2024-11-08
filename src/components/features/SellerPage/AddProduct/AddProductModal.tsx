import React from "react";
import { ModalHeader, ModalCloseButton, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";
import ProductDescription from "@components/features/StoreDetailPage/ProductDescription";
import AddInfo from "./AddInfo";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose }) => (
  <BasicModal isOpen={isOpen} onClose={onClose}>
    <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
    <ModalHeader>
      <Tabs ml={5}>
        <TabList w="1050px">
          <Tab _selected={{ color: "#22543D", fontSize: "30px", fontWeight: "bold", bg: "none" }}>Write</Tab>
          <Tab _selected={{ color: "#22543D", fontSize: "30px", fontWeight: "bold", bg: "none" }}>Preview</Tab>
        </TabList>

        <TabPanels py="10px">
          <TabPanel>
            <AddInfo />
          </TabPanel>
          <TabPanel>
            <ProductDescription />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ModalHeader>
  </BasicModal>
);

export default AddProductModal;
