import { Flex, Text } from "@chakra-ui/react";
import ImageCard, { ImageCardProps } from "@components/common/ImageCard";
import { Schedule } from "@type/index";

type BestScheduleCardProps = ImageCardProps & {
  item: Schedule;
};

const BestScheduleCard = ({ item, ...props }: BestScheduleCardProps) => (
  <ImageCard {...props}>
    <Flex align="center" direction="column" w="full" mt="auto" mb="10">
      <Text px="5" color="green" bg="white" borderRadius="xl">
        {item.farm.address}
      </Text>
      <Text color="white" fontSize="2xl" fontWeight="bold">
        {item.name}
      </Text>
    </Flex>
  </ImageCard>
);

export default BestScheduleCard;
