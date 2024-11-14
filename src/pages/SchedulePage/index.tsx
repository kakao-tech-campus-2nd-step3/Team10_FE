import { Flex } from "@chakra-ui/react";
import GridView from "@components/ItemView/GridView";
import BestScheduleSection from "@components/features/SchedulePage/BestScheduleSection";
import ScheduleCategory from "@components/features/SchedulePage/ScheduleCategory";
import ProductCard from "@components/features/StorePage/ProductCard";
import size from "@constants/size";
import mockProducts from "@mocks/mockItem/mockProducts";

const SchedulePage = () => (
  <Flex align="center" direction="column" w="full" h="full" minH={`calc(100vh - ${size.footer.h} - ${size.header.h})`}>
    <Flex direction="column" rowGap="24" w="1100px" my="20">
      <BestScheduleSection />
      <ScheduleCategory />
      <GridView items={mockProducts} ItemComponent={ProductCard} columns={3} gap="10" />
    </Flex>
  </Flex>
);

export default SchedulePage;
