import React from "react";
import { Flex, Button, Text, Divider } from "@chakra-ui/react";

const DetailInfo = () => (
  <Flex direction="column">
    <Text mt={20} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
      상세 정보
    </Text>
    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        재배 환경
      </Text>
      <Text mt={5} ml={47} color="#000000" fontSize="25px" fontWeight="medium">
        제초제X,화학비료X,화학농약X
      </Text>
      <Button
        w="100px"
        h="40px"
        mt={5}
        ml={250}
        color="#5C5C5C"
        fontSize="25px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#000000"
        borderRadius="40px"
        _hover={{
          bgColor: "#FFFFFF",
          borderColor: "#000000",
        }}
        bgColor="#FFFFFF"
      >
        수정
      </Button>
    </Flex>
    <Divider w="690px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        위치
      </Text>
      <Text mt={5} ml={24} color="#000000" fontSize="25px" fontWeight="medium">
        부산진구 개금동
      </Text>
      <Button
        w="100px"
        h="40px"
        mt={5}
        ml={400}
        color="#5C5C5C"
        fontSize="25px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#000000"
        borderRadius="40px"
        _hover={{
          bgColor: "#FFFFFF",
          borderColor: "#000000",
        }}
        bgColor="#FFFFFF"
      >
        수정
      </Button>
    </Flex>
    <Divider w="690px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        농장 설명
      </Text>

      <Button
        w="100px"
        h="40px"
        mt={5}
        ml={600}
        color="#5C5C5C"
        fontSize="25px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#000000"
        borderRadius="40px"
        _hover={{
          bgColor: "#FFFFFF",
          borderColor: "#000000",
        }}
        bgColor="#FFFFFF"
      >
        수정
      </Button>
    </Flex>
    <Divider w="690px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

    <Flex direction="row">
      <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
        연락처 정보
      </Text>
      <Text mt={5} ml={5} color="#000000" fontSize="25px" fontWeight="medium">
        010-1234-1234
      </Text>
      <Button
        w="100px"
        h="40px"
        mt={5}
        ml={375}
        color="#5C5C5C"
        fontSize="25px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#000000"
        borderRadius="40px"
        _hover={{
          bgColor: "#FFFFFF",
          borderColor: "#000000",
        }}
        bgColor="#FFFFFF"
      >
        수정
      </Button>
    </Flex>
    <Divider w="690px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
  </Flex>
);

export default DetailInfo;
