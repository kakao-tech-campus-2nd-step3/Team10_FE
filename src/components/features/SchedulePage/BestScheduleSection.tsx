import { Box, Text } from "@chakra-ui/react";
import GridView from "@components/ItemView/GridView";
import BestScheduleCard from "@components/features/SchedulePage/BestScheduleCard";
import mockBestSchedule from "@mocks/mockItem/mockBestSchedule";

const BestScheduleSection = () => (
  <Box w="1100px">
    <Text py="3" fontSize="2xl" fontWeight="bold">
      이번주 Best
    </Text>
    <GridView items={mockBestSchedule} columns={2} gap="20px" ItemComponent={BestScheduleCard} />
  </Box>
);

export default BestScheduleSection;
