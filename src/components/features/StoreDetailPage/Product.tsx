import { HeartOutlined } from "@ant-design/icons";
import { Box, Button, Image, Text, Flex, Icon, Divider, HStack, Input, useNumberInput } from "@chakra-ui/react";
import store1 from "@assets/Image/Store/Store1.png";

const Product = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 10,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Flex direction="row">
      <Box mt={100} ml={200}>
        <Image w="500px" h="460px" borderRadius="12px" alt="product" src={store1} />
      </Box>
      <Flex direction="column" maxW="600px">
        <Flex direction="row">
          <Flex direction="column">
            <Text mt={100} ml={50} color="#000000" fontSize="30px" fontWeight="bold">
              건호네 맛있는 포도
            </Text>
            <Flex direction="row">
              <Text mt={1} ml={50} color="#48BB78" fontSize="24px" fontWeight="bold">
                15%
              </Text>
              <Text
                mt={1}
                ml={3}
                color="#C2C2C2"
                fontSize="24px"
                fontWeight="medium"
                textDecoration="line-through"
                textDecorationColor="#C2C2C2"
              >
                32,000
              </Text>
              <Text ml={3} color="#000000" fontSize="30px" fontWeight="bold">
                27,000
              </Text>
            </Flex>
          </Flex>
          <Flex
            align="center"
            justify="center"
            w="50px"
            h="50px"
            mt={100}
            ml={190}
            color="#FFFFFF"
            borderRadius="12px"
            cursor="pointer"
            bgColor="#FC8181"
          >
            <Icon as={HeartOutlined} fontSize="30px" />
          </Flex>
        </Flex>
        <Divider
          w="500px"
          mt={3}
          ml={50}
          borderWidth="0.7px"
          borderColor="rgba(56, 56, 56, 0.5)"
          orientation="horizontal"
        />
        <Flex
          align="center"
          justify="center"
          w="84px"
          h="36px"
          mt={5}
          ml={50}
          color="#FFFFFF"
          fontSize="20px"
          fontWeight="medium"
          borderRadius="12px"
          bgColor="#1C4532"
        >
          유기농
        </Flex>
        <Flex direction="row">
          <Text mt={5} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            재배환경
          </Text>
          <Text mt={5} ml={90} color="#000000" fontSize="18px" fontWeight="medium">
            제초제X, 화학비료X, 화학농약X
          </Text>
        </Flex>
        <Flex direction="row">
          <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            생산지
          </Text>
          <Text mt={3} ml={105} color="#000000" fontSize="18px" fontWeight="medium">
            부산진구 개금동
          </Text>
        </Flex>
        <Flex direction="row">
          <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            배송비
          </Text>
          <Text mt={3} ml={105} color="#48BB78" fontSize="18px" fontWeight="bold">
            무료배송
          </Text>
        </Flex>
        <Flex direction="row">
          <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            배송 출발일
          </Text>
          <Text mt={3} ml={70} color="#000000" fontSize="18px" fontWeight="medium">
            지금 주문 시
          </Text>
        </Flex>

        <Flex direction="row">
          <Text mt={5} mr={120} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            수량
          </Text>
          <HStack mt={4}>
            <Button h="40px" {...dec}>
              -
            </Button>
            <Input {...input} w="200px" h="40px" textAlign="center" />
            <Button h="40px" {...inc}>
              +
            </Button>
          </HStack>
        </Flex>

        <Button
          alignItems="center"
          justifyContent="center"
          display="flex"
          w="500px"
          h="54px"
          mt={7}
          ml={50}
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="bold"
          borderRadius="15px"
          _hover={{ bgColor: "#1C4532" }}
          _active={{ bgColor: "#1C4532" }}
          bgColor="#1C4532"
        >
          장바구니 담기
        </Button>
      </Flex>
    </Flex>
  );
};

export default Product;
