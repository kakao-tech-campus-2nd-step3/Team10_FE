import { Box, Image, Text, Flex, Divider } from "@chakra-ui/react";
import farm3 from "@assets/Image/Farm/Farm3.png";
import farm4 from "@assets/Image/Farm/Farm4.png";
import farm5 from "@assets/Image/Farm/Farm5.png";
import farm6 from "@assets/Image/Farm/Farm6.png";

const ProductDescription = () => (
  <Flex direction="column">
    <Text mt={100} ml={200} color="#1C4532" fontSize="24px" fontWeight="bold">
      상품 설명
    </Text>
    <Divider
      w="1100px"
      mt={3}
      ml={200}
      borderWidth="0.7px"
      borderColor="rgba(56, 56, 56, 0.5)"
      orientation="horizontal"
    />
    <Text mt={10} ml={200} color="#000000" fontSize="32px" fontWeight="bold">
      지민이네 복숭아 따기 농장을 소개합니다🥰
    </Text>
    <Flex direction="row">
      <Image w="500px" h="490px" mt={10} ml={200} borderRadius="12px" alt="farm3" src={farm3} />
      <Flex direction="column">
        <Box w="520px" h="150px" mt={10} ml={10} borderRadius="12px" bgColor="#22543D">
          <Flex direction="row">
            <Flex direction="column" ml={8}>
              <Text mt={7} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                자연과의 만남
              </Text>
              <Text color="#FFFFFF" fontSize="15px" fontWeight="medium">
                아름다운 농장에서 복숭아 나무 사이를 거닐며,
                <br />
                자연의 소리를 느껴보세요.
              </Text>
            </Flex>
            <Image w="120px" h="120px" mt={4} ml={67} borderRadius="100px" alt="farm4" src={farm4} />
          </Flex>
        </Box>
        <Box w="520px" h="150px" mt={5} ml={10} borderRadius="12px" bgColor="#22543D">
          <Flex direction="row">
            <Flex direction="column" ml={8}>
              <Text mt={7} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                체험의 즐거움
              </Text>
              <Text color="#FFFFFF" fontSize="15px" fontWeight="medium">
                복숭아 수확뿐만 아니라,
                <br />잼 만들기와 같은 다양한 프로그램에 참여해보세요!
              </Text>
            </Flex>
            <Image w="120px" h="120px" mt={4} ml={41} borderRadius="100px" alt="farm5" src={farm5} />
          </Flex>
        </Box>
        <Box w="520px" h="150px" mt={5} ml={10} borderRadius="12px" bgColor="#22543D">
          <Flex direction="row">
            <Flex direction="column" ml={8}>
              <Text mt={7} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                맛있는 시식
              </Text>
              <Text color="#FFFFFF" fontSize="15px" fontWeight="medium">
                수확한 복숭아를 직접 맛보고,
                <br />
                가족과 함께하는 즐거운 시간이 기다리고 있습니다!
              </Text>
            </Flex>
            <Image w="120px" h="120px" mt={4} ml={41} borderRadius="100px" alt="farm6" src={farm6} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </Flex>
);

export default ProductDescription;
