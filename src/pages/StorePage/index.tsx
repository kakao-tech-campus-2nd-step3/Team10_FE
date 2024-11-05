import { Flex } from "@chakra-ui/react";
import HeaderBanner from "@components/features/StorePage/HeaderBanner";
import Review from "@components/features/StorePage/Review";
import StoreBanner from "@components/features/StorePage/StoreBanner";
import size from "@constants/size";

const StorePage = () => (
  <Flex align="center" direction="column" w="full" h="full" minH={`calc(100vh - ${size.footer.h} - ${size.header.h})`}>
    <Flex direction="column" rowGap="24" w="1100px" my="20">
      <Flex direction="column" gap="10">
        <HeaderBanner />
        <Review />
      </Flex>
      <StoreBanner />
    </Flex>
  </Flex>
);

export default StorePage;
