import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import GridView from "@components/ItemView/GridView";
import Card from "@components/common/Card";
import ProductCard from "@components/features/StorePage/ProductCard";
import mockProducts from "@mocks/mockItem/mockProducts";

const RecentOrders = () => (
  <Card mx="auto" bg="white" w="1000px" p="10" h="100%" title="최근 주문 관리">
    <Tabs overflow="hidden" w="100%" h="100%">
      <TabList>
        <Tab _selected={{ color: "#22543D", fontWeight: "bold", bg: "none" }}>배송 접수 필요</Tab>
        <Tab _selected={{ color: "#22543D", fontWeight: "bold", bg: "none" }}>환불 접수된 주문</Tab>
      </TabList>
      <TabPanels overflowY="scroll" w="100%" h="100%" mt="2" px="0" pb="10">
        <TabPanel>
          <GridView items={mockProducts.slice(0, 4)} ItemComponent={ProductCard} columns={3} gap="10" />
        </TabPanel>
        <TabPanel>
          <GridView items={mockProducts.slice(4, 6)} ItemComponent={ProductCard} columns={3} gap="10" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Card>
);

export default RecentOrders;
