import React from "react";
import { ModalHeader, ModalCloseButton, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";
import ProductDescription from "@components/features/FarmDetailPage/ProductDescription";
import AddInfo from "./AddInfo";

interface AddFarmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddFarmModal: React.FC<AddFarmModalProps> = ({ isOpen, onClose }) => (
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
          <TabPanel mt={-200} ml={-200}>
            <ProductDescription />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ModalHeader>
  </BasicModal>
);

export default AddFarmModal;
