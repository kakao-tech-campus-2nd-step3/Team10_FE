import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import ImageCard, { ImageCardProps } from "@components/common/ImageCard";
import { Schedule } from "@type/index";

type ScheduleCardProps = ImageCardProps & {
  item: Schedule & { link?: string };
};

const ScheduleCard = ({ item, ...props }: ScheduleCardProps) => (
  <Box {...(item.link ? { as: Link, to: item.link } : {})}>
    <ImageCard
      h="full"
      {...props}
      imageProps={{
        filter: "auto",
        brightness: item?.mainImage ? 1 : 0.6,
      }}
      bgImg={item.mainImage}
      _hover={
        item.link
          ? {
              transform: "scale(1.05)",
            }
          : {}
      }
    >
      <Flex align="center" direction="column" w="full" mt="auto" mb="10">
        <Text px="5" color="green" bg="white" borderRadius="xl">
          {item.address}
        </Text>
        <Text color="white" fontSize="2xl" fontWeight="bold">
          {item.name}
        </Text>
      </Flex>
    </ImageCard>
  </Box>
);

export default ScheduleCard;
