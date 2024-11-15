import { Flex, Button, Text } from "@chakra-ui/react";
import farm1 from "@assets/Image/Farm/Farm1.png";
import Image from "@components/common/Image";

const FarmList = () => (
  <Flex justify="space-between" direction="row" mt={10}>
    <Flex direction="column">
      <Text color="#000000" fontSize="20px" fontWeight="bold">
        2024.09.14
      </Text>
      <Text mt={3} color="#000000" fontSize="16px" fontWeight="bold">
        지민이네 복숭아 농장
      </Text>
      <Flex align="center" direction="row" gap="10px">
        <Image mt={3} w="150px" h="150px" src={farm1} alt="Farm image" />
        <Text w="250px" color="#000000" fontSize="16px" fontWeight="medium">
          가끔 지민은 학교에서 심각하게 집에 가고싶을 때가 있어요. 그럴 때면 로만이나 자스민에서 산 달달한 복숭아
          아이스티를 마시며 향수병을 달랩니다.
        </Text>
      </Flex>
    </Flex>

    <Flex justify="center" direction="column" gap="10px">
      <Button
        w="230px"
        h="50px"
        color="#22543D"
        fontSize="24px"
        fontWeight="bold"
        borderWidth="1px"
        borderColor="#22543D"
        borderRadius="12px"
        _hover={{ bgColor: "#FFFFFF" }}
        bgColor="#FFFFFF"
      >
        문의하기
      </Button>
      <Button
        w="230px"
        h="50px"
        color="#FFFFFF"
        fontSize="24px"
        fontWeight="bold"
        borderWidth="1px"
        borderColor="#22543D"
        borderRadius="12px"
        _hover={{ bgColor: "#22543D" }}
        bgColor="#22543D"
      >
        후기쓰기
      </Button>
    </Flex>
  </Flex>
);

export default FarmList;
