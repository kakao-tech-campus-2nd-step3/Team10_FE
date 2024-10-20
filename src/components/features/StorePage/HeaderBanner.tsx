import { Flex, Text } from "@chakra-ui/react";
import ImageCard from "@components/common/ImageCard";
import store3 from "../../../assets/Image/Store/Store3.png";

const HeaderBanner = () => (
  <ImageCard w="full" aspectRatio="11/3" bgImg={store3}>
    <Flex justify="center" direction="column" w="full" pl="100px">
      <Text color="#C6F6D5" fontSize="2xl" fontWeight="bold">
        지민이가 먹다가 기절한
      </Text>
      <Text color="#FFFFFF" fontSize="4xl" fontWeight="bold">
        건호네 맛있는 포도
      </Text>
      <Flex align="center" direction="row">
        <Text px="2" color="#FFFFFF" fontWeight="bold" textAlign="center" bg="#48BB78" borderRadius="xl">
          15% 할인
        </Text>
        <Text
          mx="3"
          color="#f5f5f5"
          fontSize="large"
          fontWeight="bold"
          textDecorationColor="#48BB78"
          textDecorationLine="line-through"
          textDecorationThickness="2px"
        >
          32,000원
        </Text>
        <Text color="white" fontSize="large" fontWeight="bold">
          27,600원
        </Text>
      </Flex>
    </Flex>
  </ImageCard>
);

export default HeaderBanner;
