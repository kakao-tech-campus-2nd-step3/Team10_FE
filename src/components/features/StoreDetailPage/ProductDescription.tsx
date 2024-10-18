import { Box, Image, Text, Flex, Divider } from "@chakra-ui/react";
import store1 from "@assets/Image/Store/Store1.png";
import store5 from "@assets/Image/Store/Store5.png";
import store6 from "@assets/Image/Store/Store6.png";
import store7 from "@assets/Image/Store/Store7.png";

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
      건호네 포도에 대해서 소개합니다😀
    </Text>
    <Flex direction="row">
      <Image w="500px" h="490px" mt={10} ml={200} borderRadius="12px" alt="store1" src={store1} />
      <Flex direction="column">
        <Box w="520px" h="150px" mt={10} ml={10} borderRadius="12px" bgColor="#22543D">
          <Flex direction="row">
            <Flex direction="column" ml={8}>
              <Text mt={7} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                신선함의 상징
              </Text>
              <Text color="#FFFFFF" fontSize="15px" fontWeight="medium">
                매일 아침 수확한 포도를 즉시 배송하여,
                <br />
                여러분의 식탁에 가장 신선한 맛을 전해드립니다.
              </Text>
            </Flex>
            <Image w="120px" h="120px" mt={4} ml={50} borderRadius="100px" alt="store5" src={store5} />
          </Flex>
        </Box>
        <Box w="520px" h="150px" mt={5} ml={10} borderRadius="12px" bgColor="#22543D">
          <Flex direction="row">
            <Flex direction="column" ml={8}>
              <Text mt={6} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                건강한 선택
              </Text>
              <Text color="#FFFFFF" fontSize="13px" fontWeight="medium">
                포도는 비타민과 항산화 물질이 풍부하여
                <br />
                면역력 강화와 피부 건강에 도움을 줍니다.
                <br />
                자연 그대로의 맛을 느끼며 건강을 챙기세요.
              </Text>
            </Flex>
            <Image w="120px" h="120px" mt={4} ml={109} borderRadius="100px" alt="store6" src={store6} />
          </Flex>
        </Box>
        <Box w="520px" h="150px" mt={5} ml={10} borderRadius="12px" bgColor="#22543D">
          <Flex direction="row">
            <Flex direction="column" ml={8}>
              <Text mt={6} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                다채로운 활용
              </Text>
              <Text color="#FFFFFF" fontSize="13px" fontWeight="medium">
                포도는 샐러드, 디저트, 주스 등
                <br />
                다양한 요리에 활용할 수 있습니다.
                <br />
                창의적인 레시피와 함께 포도의 매력을 만끽하세요!
              </Text>
            </Flex>
            <Image w="120px" h="120px" mt={4} ml={76} borderRadius="100px" alt="store7" src={store7} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </Flex>
);

export default ProductDescription;
