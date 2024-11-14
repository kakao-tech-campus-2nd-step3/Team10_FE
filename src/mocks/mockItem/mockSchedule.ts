import mockImage1 from "@assets/Image/Farm/Best1.png";
import mockImage2 from "@assets/Image/Farm/Best2.png";
import mockFarms from "@mocks/mockItem/mockFarms";
import { Schedule } from "@type/index";

const mockSchedule: Schedule[] = [
  {
    id: 1,
    name: "건호네 포도따기 체험",
    mainImage: mockImage1,
    farm: mockFarms[0],
  },
  {
    id: 2,
    name: "도균이네 가지따기 체험",
    mainImage: mockImage2,
    farm: mockFarms[4],
  },
  {
    id: 3,
    name: "영훈이네 사과따기 체험",
    farm: mockFarms[1],
  },
  {
    id: 4,
    name: "영훈이네 사과따기 체험",
    farm: mockFarms[1],
  },
  {
    id: 5,
    name: "영훈이네 사과따기 체험",
    farm: mockFarms[1],
  },
  {
    id: 6,
    name: "영훈이네 사과따기 체험",
    farm: mockFarms[1],
  },
];

export default mockSchedule;
