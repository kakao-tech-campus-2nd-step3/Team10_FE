import { useState } from "react";
import { HeartOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";
import { Text, Flex, Box, Icon, Button } from "@chakra-ui/react";
import Delivery from "./Info/Delivery";
import Logout from "./Info/Logout";
import MyInfo from "./Info/MyInfo";

const Category = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleDeliveryClick = () => {
    setActiveComponent("delivery");
  };

  const handleMyInfoClick = () => {
    setActiveComponent("my-info");
  };

  const handleLogoutClick = () => {
    setActiveComponent("logout");
  };

  const handleClose = () => {
    setActiveComponent(null);
  };

  return (
    <Box w="300px" h="800px" border="none" borderRadius="20px" bgColor="#FFFFFF">
      <Flex direction="column">
        <Flex direction="row" mt={10} ml={5}>
          <Icon as={HeartOutlined} color="#22543D" fontSize="25px" />
          <Text mt={-1} ml={3} color="#000000" fontSize="20px" fontWeight="bold">
            위시리스트
          </Text>
        </Flex>
        <Button
          w="50px"
          h="20px"
          mt={3}
          ml={5}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          농산품
        </Button>
        <Button
          w="68px"
          h="20px"
          mt={1}
          ml={5}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          농장 체험
        </Button>
        <Flex direction="row" mt={10} ml={5}>
          <Icon as={ProfileOutlined} color="#22543D" fontSize="25px" />
          <Text mt={-1} ml={3} color="#000000" fontSize="20px" fontWeight="bold">
            주문 관리
          </Text>
        </Flex>
        <Button
          w="95px"
          h="20px"
          mt={3}
          ml={5}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          상품 주문 내역
        </Button>
        <Button
          w="95px"
          h="20px"
          mt={1}
          ml={5}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          농장 체험 관리
        </Button>
        <Button
          w="68px"
          h="20px"
          mt={1}
          ml={5}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          리뷰 관리
        </Button>
        <Flex direction="row" mt={10} ml={5}>
          <Icon as={UserOutlined} color="#22543D" fontSize="25px" />
          <Text mt={-1} ml={3} color="#000000" fontSize="20px" fontWeight="bold">
            정보 관리
          </Text>
        </Flex>
        <Button
          w="83px"
          h="20px"
          mt={3}
          ml={5}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleDeliveryClick}
        >
          배송지 수정
        </Button>
        <Button
          w="88px"
          h="20px"
          mt={1}
          ml={5}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleMyInfoClick}
        >
          내 정보 수정
        </Button>
        <Button
          w="68px"
          h="20px"
          mt={1}
          ml={5}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleLogoutClick}
        >
          회원 탈퇴
        </Button>
        {activeComponent === "delivery" && <Delivery setIsDeliveryVisible={handleClose} />}
        {activeComponent === "my-info" && <MyInfo setIsMyInfoVisible={handleClose} />}
        {activeComponent === "logout" && <Logout setIsLogoutVisible={handleClose} />}
      </Flex>
    </Box>
  );
};

export default Category;
