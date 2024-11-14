import { Flex } from "@chakra-ui/react";
import BestScheduleSection from "@components/features/SchedulePage/BestScheduleSection";
import size from "@constants/size";

const FarmPage = () => (
  <Flex align="center" direction="column" w="full" h="full" minH={`calc(100vh - ${size.footer.h} - ${size.header.h})`}>
    <Flex direction="column" rowGap="24" w="1100px" my="20">
      <BestScheduleSection />
    </Flex>
  </Flex>
);

export default FarmPage;
