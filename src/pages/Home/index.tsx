import { Flex } from "@chakra-ui/react";
import GridView from "@components/ItemView/GridView";
import BestScheduleSection from "@components/features/SchedulePage/BestScheduleSection";
import HeaderBanner from "@components/features/StorePage/HeaderBanner";
import ProductCard from "@components/features/StorePage/ProductCard";
import Review from "@components/features/StorePage/Review";
import size from "@constants/size";
import mockMainProducts from "@mocks/mockItem/mockMainProducts";

const Home = () => (
  <Flex align="center" direction="column" w="full" h="full" minH={`calc(100vh - ${size.footer.h} - ${size.header.h})`}>
    <Flex direction="column" rowGap="10" w="1100px" my="20">
      <Flex direction="column" gap="10" mb="30">
        <HeaderBanner />
        <Review />
      </Flex>
      <BestScheduleSection />
      <GridView items={mockMainProducts} ItemComponent={ProductCard} columns={3} gap="25px" />
    </Flex>
  </Flex>
);

export default Home;
