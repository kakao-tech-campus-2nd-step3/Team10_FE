import { useState } from "react";
import { Text, Flex, Box, Button } from "@chakra-ui/react";

import AddFarm from "./AddFarm";
import AddProduct from "./AddProduct";
import BusinessRegister from "./BusinessRegister";
import EditFarm from "./EditFarm";
import EditProduct from "./EditProduct";

import EditInfo from "./MyInfo/EditInfo";
import Logout from "./MyInfo/Logout";
import Tax from "./Tax.tsx";

const SellerCategory = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleTaxClick = () => {
    setActiveComponent("tax");
  };

  const handleBusinessClick = () => {
    setActiveComponent("business");
  };

  const handleAddProductClick = () => {
    setActiveComponent("add-product");
  };

  const handleAddFarmClick = () => {
    setActiveComponent("add-farm");
  };

  const handleEditProductClick = () => {
    setActiveComponent("edit-product");
  };

  const handleEditFarmClick = () => {
    setActiveComponent("edit-farm");
  };

  const handleEditInfoClick = () => {
    setActiveComponent("edit-info");
  };

  const handleLogoutClick = () => {
    setActiveComponent("logout");
  };

  const handleClose = () => {
    setActiveComponent(null);
  };

  return (
    <Box w="230px" h="1280px" border="none" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={10} ml={5} color="#000000" fontSize="20px" fontWeight="bold">
          할 일
        </Text>
        <Button
          w="100px"
          h="20px"
          mt={3}
          ml={4}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          최근 주문 관리
        </Button>
        <Button
          w="115px"
          h="20px"
          mt={1}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          품절된 상품
        </Button>

        <Text mt={10} ml={5} color="#000000" fontSize="20px" fontWeight="bold">
          판매 분석
        </Text>
        <Button
          w="80px"
          h="20px"
          mt={3}
          ml={4}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleTaxClick}
        >
          세금 계산기
        </Button>
        <Button
          w="80px"
          h="20px"
          mt={1}
          ml={4}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleBusinessClick}
        >
          사업자 등록
        </Button>

        <Text mt={10} ml={5} color="#000000" fontSize="20px" fontWeight="bold">
          농산물 홈
        </Text>
        <Button
          w="80px"
          h="20px"
          mt={3}
          ml={4}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleAddProductClick}
        >
          농산물 등록
        </Button>
        <Button
          w="80px"
          h="20px"
          mt={1}
          ml={4}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleEditProductClick}
        >
          농산물 수정
        </Button>

        <Text mt={10} ml={5} color="#000000" fontSize="20px" fontWeight="bold">
          농장 홈
        </Text>
        <Button
          w="70px"
          h="20px"
          mt={3}
          ml={4}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleAddFarmClick}
        >
          농장 등록
        </Button>
        <Button
          w="70px"
          h="20px"
          mt={1}
          ml={4}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleEditFarmClick}
        >
          농장 수정
        </Button>

        <Text mt={10} ml={5} color="#000000" fontSize="20px" fontWeight="bold">
          정보 관리
        </Text>
        <Button
          w="70px"
          h="20px"
          mt={3}
          ml={6}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleEditInfoClick}
        >
          내 정보 수정
        </Button>
        <Button
          w="70px"
          h="20px"
          mt={1}
          ml={4}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleLogoutClick}
        >
          회원 탈퇴
        </Button>
        {activeComponent === "add-product" && <AddProduct setIsAddProductVisible={handleClose} />}
        {activeComponent === "add-farm" && <AddFarm setIsAddFarmVisible={handleClose} />}
        {activeComponent === "edit-product" && <EditProduct setIsEditProductVisible={handleClose} />}
        {activeComponent === "edit-farm" && <EditFarm setIsEditFarmVisible={handleClose} />}
        {activeComponent === "edit-info" && <EditInfo setIsEditInfoVisible={handleClose} />}
        {activeComponent === "logout" && <Logout setIsLogoutVisible={handleClose} />}
        {activeComponent === "business" && <BusinessRegister setBusinessVisible={handleClose} />}
        {activeComponent === "tax" && <Tax setTaxVisible={handleClose} />}
      </Flex>
    </Box>
  );
};

export default SellerCategory;
