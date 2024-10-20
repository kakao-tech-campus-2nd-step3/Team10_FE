import mockFarms from "@mocks/mockItem/mockFarms";
import { Product } from "@type/index";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "건호네 미나리",
    unit: "[10kg/20단]",
    pricePerGram: "830원/100g",
    description:
      "미나미나리. 가끔 그런 생각을 해요. 이렇게 디자인을 하다보면 몰입감이 필요하다는 그런 생각이랄까. 그래서 여러 사진을 넣어요. 진짜처럼.",
    farm: mockFarms[0],
    tag: "유기농",
  },
  {
    id: 2,
    name: "토맛 토마토",
    unit: "[5kg/10단]",
    pricePerGram: "520원/100g",
    description:
      "토맛토맛토는 토마토맛토가 되고 싶었어요. 그래서 토맛토맛토밭에서 토마토맛토 밭에 가기 위해서 토마토 수레를 끌고 토맛토마토는 열심히 걸었어요.",
    farm: mockFarms[1],
    tag: "토맛토",
  },
  {
    id: 3,
    name: "깻잎장수 지민",
    unit: "[3kg/15단]",
    pricePerGram: "650원/100g",
    description:
      "우리 엄마 손맛 가득한 깻잎입니다. 무농약으로 키워낸 건강한 깻잎, 간장에 절여 먹거나 쌈장에 곁들여 드셔보세요. 향긋하고 신선해요!",
    farm: mockFarms[2],
    tag: "무농약",
  },
  {
    id: 4,
    name: "할로윈 늙은 호박",
    unit: "[10kg/20단]",
    pricePerGram: "830원/100g",
    description:
      "할로윈에는 늙은 호박 장신구가 있더라고요. 늙은호박을 채칼로 썰어서 반죽을 조금 묻히고 구우면 바삭하고 맛있는 호박전이 된다는 사실을 아나요?",
    farm: mockFarms[3],
    tag: "유기농",
  },
  {
    id: 5,
    name: "몸에 좋은척 하는 기이이이이이이이이이이이인 가지",
    unit: "[5kg/10단]",
    pricePerGram: "520원/100g",
    description:
      "지민이는 가지를 좋아합니다. 아니 안좋아합니다. 음.. 좋아하는걸까요? 가지나물 볶음은 좋아하는데 가지 튀김은 진짜 개 노맛이더라고요. 왜먹지?",
    farm: mockFarms[4],
    tag: "유기농",
  },
  {
    id: 6,
    name: "집에 가고싶을 땐 복숭아를",
    unit: "[3kg/15단]",
    pricePerGram: "650원/100g",
    description:
      "가끔 지민은 학교에서 심각하게 집에 가고싶을 때가 있어요. 그럴 때면 로만이나 자스민에서 산 달달한 복숭아 아이스티를 마시며 향수병을 달랩니다.",
    farm: mockFarms[2],
    tag: "무의식",
  },
];

export default mockProducts;
