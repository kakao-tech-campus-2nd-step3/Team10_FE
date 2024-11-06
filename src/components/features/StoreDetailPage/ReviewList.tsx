import { useState } from "react";
import StarRatings from "react-star-ratings";
import { Button, Text, Image, Flex, Select, Divider } from "@chakra-ui/react";
import store8 from "@assets/Image/Store/Store8.png";

const reviewsData = [
  {
    id: 1,
    name: "김*호",
    rating: 5,
    purchase: "첫번째 구매",
    product: "건호네 하나뿐인 미나리",
    image: store8,
    comment: "기대 안하고 샀는데 생각보다 괜찮네요.",
    date: "2024.09.14",
  },
  {
    id: 2,
    name: "이*진",
    rating: 4,
    purchase: "두번째 구매",
    product: "신선한 미나리",
    image: store8,
    comment: "상상보다 신선하고 맛있어요!",
    date: "2024.09.15",
  },
  {
    id: 3,
    name: "박*진",
    rating: 5,
    purchase: "두번째 구매",
    product: "신선한 미나리",
    image: store8,
    comment: "원래 미나리 안 먹는데 벌써 재구매!",
    date: "2024.09.25",
  },
];

const ReviewList = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Flex align="flex-start" direction="column" mb={50} ml={-140}>
      <Flex mt={5}>
        <Select w="1090px" placeholder="최신순">
          <option value="option1">인기순</option>
          <option value="option2">별점 높은순</option>
          <option value="option2">별점 낮은순</option>
        </Select>
      </Flex>
      <Flex align="center" direction="row" pt="5">
        <Text color="#000000" fontSize="18px" fontWeight="medium">
          사진 후기만 보기
        </Text>
        <Button
          ml="2"
          borderWidth="0.7px"
          borderColor="#999999"
          borderRadius="50%"
          _hover={{ bgColor: isActive ? "#1C4532" : "#FFFFFF" }}
          aspectRatio="1"
          bgColor={isActive ? "#1C4532" : "#FFFFFF"}
          onClick={handleClick}
          size="xs"
        />
      </Flex>
      {reviewsData.map((review, index) => (
        <Flex key={review.id} direction="column" mt={10}>
          <Flex direction="row">
            <Text mr={900} color="#000000" fontSize="20px" fontWeight="bold">
              {review.name}
            </Text>
            <StarRatings rating={review.rating} starRatedColor="#1C4532" starDimension="20px" starSpacing="5px" />
          </Flex>
          <Flex direction="row">
            <Text mt={1} color="#22543D" fontSize="16px" fontWeight="bold">
              {review.purchase}
            </Text>
            <Text mt={1} ml={3} color="#5C5C5C" fontSize="16px" fontWeight="medium">
              {review.product}
            </Text>
          </Flex>
          <Image w="150px" h="150px" mt={3} borderRadius="12px" alt={review.product} src={review.image} />
          <Text mt={3} color="#000000" fontSize="16px" fontWeight="medium">
            {review.comment}
          </Text>
          <Text mt={3} color="#000000" fontSize="12px" fontWeight="medium">
            {review.date}
          </Text>
          {index < reviewsData.length - 1 && (
            <Divider w="1090px" mt={5} borderWidth="0.7px" borderColor="#C2C2C2" orientation="horizontal" />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default ReviewList;
