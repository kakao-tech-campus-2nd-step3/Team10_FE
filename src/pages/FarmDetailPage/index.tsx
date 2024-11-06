import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import Product from "@components/features/FarmDetailPage/Product";
import ProductDescription from "@components/features/FarmDetailPage/ProductDescription";
import ReviewList from "@components/features/FarmDetailPage/ReviewList";
import Reviews from "@components/features/FarmDetailPage/Reviews";

const FarmDetailPage = () => (
  <>
    <Product />
    <ProductDescription />
    <Reviews />
    <Tabs mt={100} ml={200}>
      <TabList w="1100px">
        <Tab _selected={{ color: "#1C4532", fontSize: "24px", fontWeight: "bold", bg: "none" }}>상품 설명</Tab>
        <Tab _selected={{ color: "#1C4532", fontSize: "24px", fontWeight: "bold", bg: "none" }}>후기</Tab>
      </TabList>

      <TabPanels py="10px">
        <TabPanel>
          <ProductDescription />
        </TabPanel>
        <TabPanel>
          <ReviewList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
);

export default FarmDetailPage;
