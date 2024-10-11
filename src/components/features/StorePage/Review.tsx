import { Box, Image, Text, Flex } from "@chakra-ui/react";
import store1 from "../../../assets/Image/Store/Store1.png";
import store2 from "../../../assets/Image/Store/Store2.png";

const Review = () => (
  <Box pos="relative">
    <Text mt={20} ml={200} color="#000000" fontSize="16px" fontWeight="medium">
      후기 좋은 상품
    </Text>
    <Flex direction="row">
      <Flex direction="row">
        <Flex direction="column">
          <Image w="300px" h="200px" mt={2} ml={200} alt="store1" src={store1} />
          <Text mt={2} ml={200} color="#000000" fontSize="16px" fontWeight="bold">
            건호네 맛있는 포도
          </Text>
          <Text mt={2} ml={200} color="#276749" fontSize="12px" fontWeight="medium">
            충청북도 충주시 00군 492-8번지
          </Text>
          <Text mt={2} ml={200} color="#B3B3B3" fontSize="12px" fontWeight="light">
            진택이네는 토마토가 정말 맛있어요.
            <br />
            접근성 좋은 진택이네 토마토 농장 꼭 한번 들러주세요!
          </Text>
        </Flex>
        <Flex direction="column">
          <Box pos="relative" w="220px" h="92px" mt={2} ml={3} borderRadius="12px" bgColor="#F5F5F5">
            <Text mt={7} ml={4} color="#383838" fontSize="12px" fontWeight="medium">
              아들이 요즘 시험기간이라 밥먹을 시간이
              <br />
              없어서 밥으로 주려고 샀는데 좋아해용
            </Text>
          </Box>
          <Box pos="relative" w="220px" h="92px" mt={3} ml={3} borderRadius="12px" bgColor="#F5F5F5">
            <Text mt={7} ml={4} color="#383838" fontSize="12px" fontWeight="medium">
              아잇 진택아줌마 솜씨가 말이 아니네유~
              <br />
              역시 진택네 토마토 다이어트할 때 최고
            </Text>
          </Box>
          <Box pos="relative" w="220px" h="92px" mt={3} ml={3} borderRadius="12px" bgColor="#F5F5F5">
            <Text mt={7} ml={4} color="#383838" fontSize="12px" fontWeight="medium">
              솔직히 싸서 맛이 없을 줄 알았는데 진짜
              <br />
              달달하고 상콤하네요. 너무 만족합니다!!
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex direction="row">
        <Flex direction="column" ml={-170}>
          <Image w="300px" h="200px" mt={2} ml={200} alt="store2" src={store2} />
          <Text mt={2} ml={200} color="#000000" fontSize="16px" fontWeight="bold">
            산딸기 300g
          </Text>
          <Text mt={2} ml={200} color="#276749" fontSize="12px" fontWeight="medium">
            충청북도 충주시 00군 492-8번지
          </Text>
          <Text mt={2} ml={200} color="#B3B3B3" fontSize="12px" fontWeight="light">
            진택이네는 토마토가 정말 맛있어요.
            <br />
            접근성 좋은 진택이네 토마토 농장 꼭 한번 들러주세요!
          </Text>
        </Flex>
        <Flex direction="column">
          <Box pos="relative" w="220px" h="92px" mt={2} ml={3} borderRadius="12px" bgColor="#F5F5F5">
            <Text mt={7} ml={4} color="#383838" fontSize="12px" fontWeight="medium">
              아들이 요즘 시험기간이라 밥먹을 시간이
              <br />
              없어서 밥으로 주려고 샀는데 좋아해용
            </Text>
          </Box>
          <Box pos="relative" w="220px" h="92px" mt={3} ml={3} borderRadius="12px" bgColor="#F5F5F5">
            <Text mt={7} ml={4} color="#383838" fontSize="12px" fontWeight="medium">
              아잇 진택아줌마 솜씨가 말이 아니네유~
              <br />
              역시 진택네 토마토 다이어트할 때 최고
            </Text>
          </Box>
          <Box pos="relative" w="220px" h="92px" mt={3} ml={3} borderRadius="12px" bgColor="#F5F5F5">
            <Text mt={7} ml={4} color="#383838" fontSize="12px" fontWeight="medium">
              솔직히 싸서 맛이 없을 줄 알았는데 진짜
              <br />
              달달하고 상콤하네요. 너무 만족합니다!!
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

export default Review;
