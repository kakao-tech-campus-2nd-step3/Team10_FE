import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import Direction from "@components/features/FarmDetailPage/Direciton";
import Product from "@components/features/FarmDetailPage/Product";
import ProductDescription from "@components/features/FarmDetailPage/ProductDescription";
import ReviewList from "@components/features/FarmDetailPage/ReviewList";

const FarmDetailPage = () => {
  const params = useParams();

  const scheduleId = Number(params?.scheduleId);

  return (
    <>
      <Product scheduleId={scheduleId} />

      <Tabs mt={100} ml={200}>
        <TabList w="1100px">
          <Tab _selected={{ color: "#1C4532", fontSize: "24px", fontWeight: "bold", bg: "none" }}>상품 설명</Tab>
          <Tab _selected={{ color: "#1C4532", fontSize: "24px", fontWeight: "bold", bg: "none" }}>후기</Tab>
        </TabList>

        <TabPanels py="10px">
          <TabPanel>
            <ProductDescription scheduleId={scheduleId} />
          </TabPanel>
          <TabPanel>
            <ReviewList />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Direction key="userId" lat={43} lng={128} />
    </>
  );
};

export default FarmDetailPage;
