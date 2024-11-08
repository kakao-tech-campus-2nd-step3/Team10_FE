import React from "react";
import { ModalHeader, ModalCloseButton, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import BasicModal from "@components/common/modal/BasicModal";
import ProductDescription from "@components/features/FarmDetailPage/ProductDescription";
import EditInfo from "./EditInfo";

interface EditFarmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditFarmModal: React.FC<EditFarmModalProps> = ({ isOpen, onClose }) => (
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
            <EditInfo />
          </TabPanel>
          <TabPanel mt={-200} ml={-200}>
            <ProductDescription />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ModalHeader>
  </BasicModal>
);

export default EditFarmModal;
