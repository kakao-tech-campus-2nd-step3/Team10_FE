import { Flex, Text, Box } from "@chakra-ui/react";
import image from "@assets/Image/Store/Store8.png";
import Image from "@components/common/Image";

const ProductItem = () => (
  <Flex direction="row">
    <Image flexShrink="0" w="200px" h="200px" objectFit="cover" alt="image" src={image} />
    <Flex direction="column" mt={5} ml={5}>
      <Flex direction="row">
        <Text color="#000000" fontSize="18px" fontWeight="bold">
          미나리
        </Text>
        <Box
          as={Flex}
          justifyContent="center"
          w="50px"
          h="20px"
          mt={1}
          ml={5}
          color="#FFFFFF"
          fontSize="12px"
          fontWeight="medium"
          border="none"
          borderRadius="6px"
          bgColor="#1C4532"
        >
          유기농
        </Box>
      </Flex>
      <Flex mt={3} color="#999999" fontSize="15px" fontWeight="medium">
        건호네 집에서 정성껏 키운 미나리입니다.
        <br />
        방부제 따윈 개나 줘버린 무농약 유기농 미나리, 고기 구워먹을 때 먹어도 좋고 초장에 찍어드셔도 맛있어요!
      </Flex>
      <Flex mt={2} color="#999999" fontSize="15px" fontWeight="medium">
        위치 : 부산진구 개금동
      </Flex>
      <Flex mt={2} color="#000000" fontSize="15px" fontWeight="medium">
        건호 농장
      </Flex>
    </Flex>
  </Flex>
);

export default ProductItem;
