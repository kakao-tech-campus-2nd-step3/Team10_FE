import { useState } from "react";
import { Text, Flex, Box, Button } from "@chakra-ui/react";
import AddFarm from "./AddFarm";
import AddProduct from "./AddProduct";
import EditFarm from "./EditFarm";
import EditProduct from "./EditProduct";

const SellerCategory = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

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

  const handleClose = () => {
    setActiveComponent(null);
  };

  return (
    <Box w="230px" h="1350px" border="none" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={10} ml={3} color="#000000" fontSize="20px" fontWeight="bold">
          할 일
        </Text>
        <Button
          w="100px"
          h="20px"
          mt={3}
          ml={2}
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
          ml={2}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          품절된 상품
        </Button>

        <Text mt={10} ml={3} color="#000000" fontSize="20px" fontWeight="bold">
          판매 분석
        </Text>
        <Button
          w="80px"
          h="20px"
          mt={3}
          ml={2}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          세금 계산기
        </Button>
        <Button
          w="80px"
          h="20px"
          mt={1}
          ml={2}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
        >
          사업자 등록
        </Button>

        <Text mt={10} ml={3} color="#000000" fontSize="20px" fontWeight="bold">
          농산물 홈
        </Text>
        <Button
          w="80px"
          h="20px"
          mt={3}
          ml={2}
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
          ml={2}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleEditProductClick}
        >
          농산물 수정
        </Button>

        <Text mt={10} ml={3} color="#000000" fontSize="20px" fontWeight="bold">
          농장 홈
        </Text>
        <Button
          w="70px"
          h="20px"
          mt={3}
          ml={2}
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
          ml={2}
          color="#5C5C5C"
          fontSize="16px"
          fontWeight="medium"
          _hover={{ bgColor: "#FFFFFF" }}
          bgColor="#FFFFFF"
          onClick={handleEditFarmClick}
        >
          농장 수정
        </Button>
        {activeComponent === "add-product" && <AddProduct setIsAddProductVisible={handleClose} />}
        {activeComponent === "add-farm" && <AddFarm setIsAddFarmVisible={handleClose} />}
        {activeComponent === "edit-product" && <EditProduct setIsEditProductVisible={handleClose} />}
        {activeComponent === "edit-farm" && <EditFarm setIsEditFarmVisible={handleClose} />}
      </Flex>
    </Box>
  );
};

export default SellerCategory;
