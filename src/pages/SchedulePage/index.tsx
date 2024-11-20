import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useGetFarms } from "@api/farmApi";
import GridView from "@components/ItemView/GridView";
import BestScheduleSection from "@components/features/SchedulePage/BestScheduleSection";
import ScheduleCard from "@components/features/SchedulePage/ScheduleCard";
import ScheduleCategory from "@components/features/SchedulePage/ScheduleCategory";
import size from "@constants/size";
import { FarmCategory } from "@type/index";

const SchedulePage = () => {
  const [category, setCategory] = useState<FarmCategory | null>(null);

  const { data: schedules } = useGetFarms(category?.id);

  return (
    <Flex
      align="center"
      direction="column"
      w="full"
      h="full"
      minH={`calc(100vh - ${size.footer.h} - ${size.header.h})`}
    >
      <Flex direction="column" rowGap="24" w="1100px" my="20">
        <BestScheduleSection />
        <ScheduleCategory category={category} setCategory={ct => setCategory(ct)} />
        <GridView items={schedules || []} ItemComponent={ScheduleCard} columns={3} gap="10" />
      </Flex>
    </Flex>
  );
};

export default SchedulePage;
