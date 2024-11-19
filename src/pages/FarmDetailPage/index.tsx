import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanels, TabPanel, Flex } from "@chakra-ui/react";
import AddPreview from "@components/common/AddPreview";
import Direction from "@components/features/FarmDetailPage/Direciton";
import ReviewList from "@components/features/FarmDetailPage/ReviewList";
import Schedule from "@components/features/FarmDetailPage/Schedule";

const FarmDetailPage = () => {
  const params = useParams();

  const scheduleId = Number(params?.scheduleId);

  return (
    <Flex align="center" direction="column" w="100vw">
      <Schedule scheduleId={scheduleId} />

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

      <Direction key="userId" lat={43} lng={128} />
    </Flex>
  );
};

export default FarmDetailPage;
