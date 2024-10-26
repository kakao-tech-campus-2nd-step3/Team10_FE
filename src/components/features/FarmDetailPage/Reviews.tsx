import StarRatings from "react-star-ratings";
import { Text, Flex, Divider } from "@chakra-ui/react";

const Reviews = () => (
  <Flex direction="column">
    <Flex>
      <Text mt={100} ml={200} color="#1C4532" fontSize="24px" fontWeight="bold">
        후기
      </Text>
      <Text mt={100} ml={2} color="#48BB78" fontSize="24px" fontWeight="bold">
        23
      </Text>
    </Flex>
    <Divider
      w="1100px"
      mt={3}
      ml={200}
      borderWidth="0.7px"
      borderColor="rgba(56, 56, 56, 0.5)"
      orientation="horizontal"
    />
    <Flex direction="row">
      <Flex
        align="center"
        justify="center"
        direction="column"
        w="500px"
        h="250px"
        mt={10}
        ml={200}
        borderRadius="12px"
        bgColor="#F5F5F5"
      >
        <Text mt={-3} color="#1C4532" fontSize="20px" fontWeight="bold">
          평균 만족도
        </Text>
        <Flex direction="row">
          <Text mt={2} color="#48BB78" fontSize="24px" fontWeight="bold">
            4.8
          </Text>
          <Text mt={2} ml={2} color="#000000" fontSize="24px" fontWeight="bold">
            / 5
          </Text>
        </Flex>
        <Text mt={5} color="#1C4532" fontSize="20px" fontWeight="bold">
          AI 후기 요약
        </Text>
        <Text mt={2} color="#000000" fontSize="16px" fontWeight="medium" textAlign="center">
          운영자가 생각보다 친절하다고 하네요.
          <br />
          운영자가 복숭아 알러지가 있어서 힘들어하지만
          <br />
          전체적으로 만족도는 높은 편입니다.
        </Text>
      </Flex>
      <Flex direction="column" ml={100}>
        <Flex direction="column" mt={10}>
          <Flex direction="row" mt={5}>
            <Text mr={5} color="#000000" fontSize="20px" fontWeight="bold">
              경*
            </Text>
            <StarRatings rating={4} starRatedColor="#1C4532" starDimension="20px" starSpacing="5px" />
          </Flex>
          <Text color="#22543D" fontSize="16px" fontWeight="bold">
            1번째 방문
          </Text>
          <Text color="#000000" fontSize="16px" fontWeight="medium">
            운영자가 복숭아 알러지가 있다니... 그래도 좋았어요!!
          </Text>
          <Text color="#5C5C5C" fontSize="16px" fontWeight="medium">
            2024.09.15
          </Text>
        </Flex>

        <Flex direction="column">
          <Flex direction="row" mt={3}>
            <Text mr={5} color="#000000" fontSize="20px" fontWeight="bold">
              도*
            </Text>
            <StarRatings rating={5} starRatedColor="#1C4532" starDimension="20px" starSpacing="5px" />
          </Flex>
          <Text color="#22543D" fontSize="16px" fontWeight="bold">
            3번째 재방문
          </Text>
          <Text color="#000000" fontSize="16px" fontWeight="medium">
            복숭아 맛이 좋은 것 같아요. 납작복숭아는 언제쯤..
          </Text>
          <Text color="#5C5C5C" fontSize="16px" fontWeight="medium">
            2024.09.18
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex align="center" justify="center" w="1100px" h="50px" mt={10} ml={200} borderRadius="12px" bgColor="#F5F5F5">
      <Text color="#5C5C5C" fontSize="16px" fontWeight="bold">
        23건 후기 모두 보기
      </Text>
    </Flex>
  </Flex>
);

export default Reviews;
