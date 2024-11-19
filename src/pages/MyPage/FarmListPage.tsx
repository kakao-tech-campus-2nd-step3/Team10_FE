import { Flex, Text } from "@chakra-ui/react";
import ListView from "@components/ItemView/ListView";
import Card from "@components/common/Card";
import FarmList from "@components/features/MyPage/Order/FarmList";
import mockFarms from "@mocks/mockItem/mockFarms";
import { Farm } from "@type/index";

const sortedFarms = mockFarms.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const groupedFarms = sortedFarms.reduce<Farm[][]>((acc, cur) => {
  const last = acc[acc.length - 1];
  if (!last || last[0].date !== cur.date) {
    acc.push([cur]);
  } else {
    last.push(cur);
  }
  return acc;
}, []);

const FarmListPage = () => (
  <Card title="농장 체험 내역" w="100%" h="fit-content" p="10">
    {groupedFarms.map(farms => (
      <Flex key={farms[0].date} direction="column" mb={4}>
        <Text py="2" fontWeight="bold" borderBottom="0.7px solid #000000">
          {farms[0].date}
        </Text>
        <ListView items={farms} ItemComponent={FarmList} />
      </Flex>
    ))}
  </Card>
);

export default FarmListPage;
