import { Flex, Text } from "@chakra-ui/react";
import Image from "@components/common/Image";
import { FarmCategory } from "@type/index";

const dummyCategory: FarmCategory[] = [
  {
    id: 1,
    name: "category1",
    imageUrl: "/assets/image/vegetables.png",
  },
  {
    id: 2,
    name: "category2",
    imageUrl: "/assets/image/vegetables.png",
  },
  {
    id: 3,
    name: "category3",
    imageUrl: "/assets/image/vegetables.png",
  },
  {
    id: 4,
    name: "category4",
    imageUrl: "/assets/image/vegetables.png",
  },
  {
    id: 5,
    name: "category5",
    imageUrl: "/assets/image/vegetables.png",
  },
];

type ScheduleCategoryProps = {
  category: FarmCategory | null;
  setCategory: (category: FarmCategory | null) => void;
};

const ScheduleCategory = ({ category, setCategory }: ScheduleCategoryProps) => (
  <Flex align="center" justify="center" gap="10" w="full">
    {dummyCategory.map(ct => (
      <Flex
        key={ct.id}
        justify="space-between"
        direction="column"
        w="100px"
        h="120px"
        p="0"
        bg="none"
        onClick={() => (ct.id === category?.id ? setCategory(null) : setCategory(ct))}
      >
        <Image
          filter={category && ct.id !== category.id ? "grayscale(100%)" : "none"}
          w="full"
          h="full"
          borderRadius="full"
          src={ct.imageUrl}
        />
        <Text textAlign="center" size="12px">
          {ct.name}
        </Text>
      </Flex>
    ))}
  </Flex>
);

export default ScheduleCategory;
