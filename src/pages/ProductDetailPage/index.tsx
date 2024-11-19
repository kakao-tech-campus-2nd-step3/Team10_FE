import { Tab, Tabs, TabList, TabPanels, TabPanel, Flex } from "@chakra-ui/react";
import AddPreview from "@components/common/AddPreview";
import Product from "@components/features/StoreDetailPage/Product";
import ReviewList from "@components/features/StoreDetailPage/ReviewList";

const StoreDetailPage = () => (
  <Flex align="center" direction="column" w="100vw">
    <Product productId={1} />
    <Tabs mt={100}>
      <TabList w="1100px">
        <Tab _selected={{ color: "#1C4532", fontSize: "24px", fontWeight: "bold", bg: "none" }}>상품 설명</Tab>
        <Tab _selected={{ color: "#1C4532", fontSize: "24px", fontWeight: "bold", bg: "none" }}>후기</Tab>
      </TabList>

      <TabPanels py="10px">
        <TabPanel>
          <AddPreview
            info={{
              title: "",
              mainImage: "",
              detailTitles: ["", "", ""],
              detailDescriptions: ["", "", ""],
              detailImages: ["", "", ""],
            }}
          />
        </TabPanel>
        <TabPanel>
          <ReviewList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Flex>
);

export default StoreDetailPage;
