import { HeartOutlined } from "@ant-design/icons";
import { Box, Button, Image, Text, Flex, Icon, Divider, Select } from "@chakra-ui/react";
import farm1 from "@assets/Image/Farm/Farm1.png";

const Product = () => (
  <Flex direction="row">
    <Box mt={100} ml={200}>
      <Image w="500px" h="450px" borderRadius="12px" alt="farm1" src={farm1} />
    </Box>
    <Flex direction="column" maxW="600px">
      <Flex direction="row">
        <Flex direction="column" ml={50}>
          <Text mt={100} color="#000000" fontSize="30px" fontWeight="bold">
            집에 가고싶을 땐 복숭아를 떠올려
          </Text>
          <Text mt={1} color="#000000" fontSize="30px" fontWeight="bold">
            23,000원 / 1팀(최대인원: 4명)
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          w="50px"
          h="50px"
          mt={100}
          ml={10}
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
      <Flex direction="row">
        <Text mt={8} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
          재배환경
        </Text>
        <Text mt={8} ml={75} color="#000000" fontSize="18px" fontWeight="medium">
          제초제X, 화학비료X, 화학농약X
        </Text>
      </Flex>
      <Flex direction="row">
        <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
          지역
        </Text>
        <Text mt={3} ml={105} color="#000000" fontSize="18px" fontWeight="medium">
          부산진구 개금동
        </Text>
      </Flex>
      <Flex direction="row">
        <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
          수용가능 인원
        </Text>
        <Text mt={3} ml={10} color="#000000" fontSize="18px" fontWeight="medium">
          6인
        </Text>
      </Flex>
      <Flex direction="row" gap="10px" mt={7} ml={50}>
        <Select w="245px" placeholder="소인">
          <option value="option1">1명</option>
          <option value="option2">2명</option>
          <option value="option3">3명</option>
          <option value="option3">4명</option>
        </Select>
        <Select w="245px" placeholder="대인">
          <option value="option1">1명</option>
          <option value="option2">2명</option>
          <option value="option3">3명</option>
          <option value="option3">4명</option>
        </Select>
      </Flex>
      <Select w="500px" mt={3} ml={50} placeholder="예약가능일자 조회">
        <option value="option1">10월 19일</option>
        <option value="option2">10월 20일</option>
        <option value="option3">10월 26일</option>
        <option value="option3">10월 27일</option>
      </Select>
      <Button
        alignItems="center"
        justifyContent="center"
        display="flex"
        w="500px"
        h="55px"
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
        예약하기
      </Button>
    </Flex>
  </Flex>
);

export default Product;
