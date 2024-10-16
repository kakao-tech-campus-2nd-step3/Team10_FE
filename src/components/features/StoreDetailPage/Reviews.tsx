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
          포도알갱이가 전반적으로 크며, 신맛 없이 달달한 맛.
          <br />
          남녀노소 만족스러워합니다.
        </Text>
      </Flex>
      <Flex direction="column" ml={100}>
        <Flex direction="column" mt={10}>
          <Flex direction="row" mt={5}>
            <Text mr={5} color="#000000" fontSize="20px" fontWeight="bold">
              정*
            </Text>
            <StarRatings rating={5} starRatedColor="#1C4532" starDimension="20px" starSpacing="5px" />
          </Flex>
          <Text color="#22543D" fontSize="16px" fontWeight="bold">
            1번째 방문
          </Text>
          <Text color="#000000" fontSize="16px" fontWeight="medium">
            먹다가 맛있어서 죽었어요. 그래서 재구매는 못했어요.
          </Text>
          <Text color="#5C5C5C" fontSize="16px" fontWeight="medium">
            2024.09.15
          </Text>
        </Flex>

        <Flex direction="column">
          <Flex direction="row" mt={3}>
            <Text mr={5} color="#000000" fontSize="20px" fontWeight="bold">
              풍*
            </Text>
            <StarRatings rating={4.5} starRatedColor="#1C4532" starDimension="20px" starSpacing="5px" />
          </Flex>
          <Text color="#22543D" fontSize="16px" fontWeight="bold">
            3번째 재방문
          </Text>
          <Text color="#000000" fontSize="16px" fontWeight="medium">
            롤하며 먹다 죽었어요. 책임지세요. 짱나서 반점 깜.
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
