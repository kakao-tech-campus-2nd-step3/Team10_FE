import { Flex, Button, Text } from "@chakra-ui/react";
import store8 from "@assets/Image/Store/Store8.png";
import Image from "@components/common/Image";

const ReviewList = () => (
  <Flex justify="space-between" direction="row" mt={10}>
    <Flex direction="column">
      <Text color="#000000" fontSize="20px" fontWeight="bold">
        2024.09.14
      </Text>

      <Text mt={3} color="#000000" fontSize="16px" fontWeight="medium">
        건호네 하나뿐인 미나리
      </Text>
      <Image mt={3} w="150px" h="150px" src={store8} alt="Review image" />
      <Text mt={3} color="#000000" fontSize="16px" fontWeight="medium">
        기대 안하고 샀는데 생각보다 괜찮아요.
      </Text>
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
        리뷰 삭제
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
        리뷰 수정
      </Button>
    </Flex>
  </Flex>
);

export default ReviewList;
