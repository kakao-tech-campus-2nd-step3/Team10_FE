import { Flex, Text } from "@chakra-ui/react";
import { useGetFarmCategories } from "@api/categoryApi";
import Image from "@components/common/Image";
import { FarmCategory } from "@type/index";

type ScheduleCategoryProps = {
  category: FarmCategory | null;
  setCategory: (category: FarmCategory | null) => void;
};

const ScheduleCategory = ({ category, setCategory }: ScheduleCategoryProps) => {
  const { data: farmCategories }: { data: FarmCategory[] | undefined } = useGetFarmCategories();

  return (
    <Flex align="center" justify="center" gap="10" w="full">
      {farmCategories?.map(ct => (
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
};

export default ScheduleCategory;
