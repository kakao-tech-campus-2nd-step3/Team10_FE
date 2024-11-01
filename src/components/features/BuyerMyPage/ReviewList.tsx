import StarRatings from "react-star-ratings";
import { Box, Flex, Text } from "@chakra-ui/react";

const ReviewList = () => (
  <Box w="1000px" h="220px" mt={10} mb={20} ml={50} borderRadius="12px" bgColor="rgba(240, 240, 240, 0.7)">
    <Flex direction="column">
      <Flex direction="row" mt={5}>
        <Text mr={5} ml={10} color="#383838" fontSize="24px" fontWeight="bold">
          너무 친절한 체험
        </Text>
        <StarRatings rating={5} starRatedColor="#FFC107" starDimension="25px" starSpacing="5px" />
      </Flex>
      <Text mt={3} mr={10} ml={10} color="#383838" fontSize="20px" fontWeight="medium">
        할머니께서 친절하게 고구마 캐는 방법을 가르쳐 주셨고, 아이들도 열심히 따라 했습니다. 처음에는 서툴렀지만, 곧
        익숙해져서 고구마를 하나씩 캐는 재미에 푹 빠졌습니다. 고구마를 캐는 동안 할머니의 이야기를 들으니 농사의
        소중함과 자연의 아름다움에 대해 다시 한번 생각하게 되었습니다.
      </Text>
      <Flex direction="row" mt={4}>
        <Box w="30px" h="30px" ml={10} borderRadius="50px" bgColor="#D9D9D9" />
        <Text mt={1} ml={3} color="#000000" fontSize="12px" fontWeight="medium">
          이경서
        </Text>
      </Flex>
    </Flex>
  </Box>
);

export default ReviewList;
