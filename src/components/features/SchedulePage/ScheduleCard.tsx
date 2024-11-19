import { Flex, Text } from "@chakra-ui/react";
import ImageCard, { ImageCardProps } from "@components/common/ImageCard";
import { Schedule } from "@type/index";

type ScheduleCardProps = ImageCardProps & {
  item: Schedule;
};

const ScheduleCard = ({ item, ...props }: ScheduleCardProps) => (
  <ImageCard
    {...props}
    imageProps={{
      filter: "auto",
      brightness: item?.mainImage ? 1 : 0.6,
    }}
    bgImg={item.mainImage}
  >
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

export default ScheduleCard;
