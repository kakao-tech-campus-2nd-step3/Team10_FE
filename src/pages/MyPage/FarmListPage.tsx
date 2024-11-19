import farm6 from "@assets/Image/Farm/Farm6.png";
import ListView from "@components/ItemView/ListView";
import Card from "@components/common/Card";
import FarmList from "@components/features/MyPage/Order/FarmList";
import mockFarms from "@mocks/mockItem/mockFarms";
import { Farm } from "@type/index";

const farmListData: Farm[] = mockFarms.map((farm, index) => ({
  id: farm.id,
  date: `2024.09.${index + 14}`,
  name: farm.name,
  address: farm.address,
  description: "기본 설명입니다.",
  profile: farm6,
}));

const FarmListPage = () => (
  <Card title="농장 체험 내역" w="100%" h="fit-content" p="10">
    <ListView items={farmListData} ItemComponent={FarmList} />
  </Card>
);

export default FarmListPage;
