import mockFarms from "@mocks/mockItem/mockFarms";
import { Schedule } from "@type/index";

const mockSchedule: Schedule[] = [
  {
    id: 1,
    name: "건호네 포도따기 체험",
    farm: mockFarms[0],
  },
  {
    id: 2,
    name: "도균이네 가지따기 체험",
    farm: mockFarms[4],
  },
];

export default mockSchedule;
