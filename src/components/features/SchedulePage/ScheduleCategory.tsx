import { Flex, Text } from "@chakra-ui/react";
import Image from "@components/common/Image";
import { FarmCategory } from "@type/index";

const dummyCategory: FarmCategory[] = [
  {
    id: 1,
    name: "category1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "category2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "category3",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "category4",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "category5",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const ScheduleCategory = () => (
  <Flex align="center" justify="center" gap="10" w="full">
    {dummyCategory.map(category => (
      <Flex key={category.id} justify="space-between" direction="column" w="100px" h="120px">
        <Image w="full" h="full" borderRadius="full" bgImg={category.imageUrl} />
        <Text textAlign="center" size="12px">
          {category.name}
        </Text>
      </Flex>
    ))}
  </Flex>
);

export default ScheduleCategory;
