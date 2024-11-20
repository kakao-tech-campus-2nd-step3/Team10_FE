import { Tab, Tabs, TabList, TabPanels, TabPanel, Flex } from "@chakra-ui/react";
import main from "@assets/Image/Store/Store1.png";
import detailImage1 from "@assets/Image/Store/Store5.png";
import detailImage2 from "@assets/Image/Store/Store6.png";
import detailImage3 from "@assets/Image/Store/Store7.png";
import AddPreview from "@components/common/AddPreview";
import Product from "@components/features/StoreDetailPage/Product";
import ReviewList from "@components/features/StoreDetailPage/ReviewList";

const exampleData = {
  title: "건호네 포도에 대해서 소개합니다😀",
  mainImage: main,
  detailTitles: ["신선함의 상징", "건강한 선택", "다채로운 활용"],
  detailDescriptions: [
    "매일 아침 수확한 포도를 즉시 배송하여, 여러분의 식탁에 가장 신선한 맛을 전해드립니다.",
    "포도는 비타민과 항산화 물질이 풍부하여 면역력 강화와 피부 건강에 도움을 줍니다.",
    "포도는 샐러드, 디저트, 주스 등 다양한 요리에 활용할 수 있습니다. 창의적인 레시피와 함께 포도의 매력을 만끽하세요!",
  ],
  detailImages: [detailImage1, detailImage2, detailImage3],
};

const StoreDetailPage = () => (
  <Flex align="center" direction="column" w="100vw">
    <Product productId={1} />
    <Tabs mt={100} ml={200}>
      <TabList w="1100px">
        <Tab _selected={{ color: "#1C4532", fontSize: "24px", fontWeight: "bold", bg: "none" }}>상품 설명</Tab>
        <Tab _selected={{ color: "#1C4532", fontSize: "24px", fontWeight: "bold", bg: "none" }}>후기</Tab>
      </TabList>

      <TabPanels py="10px">
        <TabPanel>
          <AddPreview info={exampleData} />
        </TabPanel>
        <TabPanel>
          <ReviewList />
        </TabPanel>
      </TabPanels>
    </Tabs>
    ㄹ
  </Flex>
);

export default StoreDetailPage;
