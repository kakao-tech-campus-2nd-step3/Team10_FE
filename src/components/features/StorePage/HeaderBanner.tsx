import { Box, Image, Text, Flex } from "@chakra-ui/react";
import store3 from "../../../assets/Image/Store/Store3.png";

const HeaderBanner = () => (
  <Box pos="relative">
    <Flex direction="column">
      <Flex justify="center">
        <Image w="1100px" h="330px" borderRadius="12px" alt="store3" src={store3} />
      </Flex>
      <Text mt={-56} ml={360} color="#C6F6D5" fontSize="24px" fontWeight="bold">
        지민이가 먹다가 기절한
      </Text>
      <Text mt={1} ml={340} color="#FFFFFF" fontSize="35px" fontWeight="bold">
        건호네 맛있는 포도
      </Text>
      <Flex align="center" direction="row">
        <Box pos="relative" mt={10} ml={352}>
          <Flex align="center" justify="center" w="70px" h="25px" borderRadius="40px" bgColor="#48BB78">
            <Text color="#FFFFFF" fontSize="13px" fontWeight="bold" textAlign="center">
              15% 할인
            </Text>
          </Flex>
        </Box>
        <Box pos="relative" mt={1}>
          <Text mt={10} ml={5} color="rgba(255, 255, 255, 0.8)" fontSize="18px" fontWeight="bold">
            32,000원
          </Text>
          <Box pos="absolute" top="50%" right="0" left="0" w="85px" h="1px" mt={5} ml={4} bgColor="#48BB78" />
        </Box>
        <Text mt={10} ml={2} color="#FFFFFF" fontSize="18px" fontWeight="bold">
          27,600원
        </Text>
      </Flex>
    </Flex>
  </Box>
);

export default HeaderBanner;
