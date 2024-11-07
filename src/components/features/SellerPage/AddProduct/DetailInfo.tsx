import { useState } from "react";
import { Flex, Input, Text, Divider, Button } from "@chakra-ui/react";
import AddProductModal from "./AddProductModal";

const DetailInfo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Flex direction="column">
      <Text mt={20} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
        상세 정보
      </Text>
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          재배 환경
        </Text>
        <Input
          w="300px"
          h="35px"
          mt="30px"
          ml="420px"
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          border="none"
          borderRadius="10px"
          _focus={{
            outline: "none",
            border: "0.5px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#F5F5F5"
        />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          생산지
        </Text>
        <Input
          w="300px"
          h="35px"
          mt="30px"
          ml="450px"
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          border="none"
          borderRadius="10px"
          _focus={{
            outline: "none",
            border: "0.5px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#F5F5F5"
        />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          농산물 설명
        </Text>
        <Button
          w="100px"
          h="40px"
          mt={5}
          ml={590}
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
          onClick={handleOpenModal}
        >
          입력
        </Button>
        {isModalOpen && <AddProductModal isOpen={isModalOpen} onClose={handleCloseModal} />}
      </Flex>
      <Divider w="700px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          연락처 정보
        </Text>
        <Input
          w="50px"
          h="35px"
          mt="30px"
          ml="335px"
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          border="none"
          borderRadius="10px"
          _focus={{
            outline: "none",
            border: "0.5px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#F5F5F5"
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="bold">
          -
        </Text>
        <Input
          w="100px"
          h="35px"
          mt="30px"
          ml={5}
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          border="none"
          borderRadius="10px"
          _focus={{
            outline: "none",
            border: "0.5px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#F5F5F5"
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="bold">
          -
        </Text>
        <Input
          w="100px"
          h="35px"
          mt="30px"
          ml={5}
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          border="none"
          borderRadius="10px"
          _focus={{
            outline: "none",
            border: "0.5px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#F5F5F5"
        />
      </Flex>
      <Divider w="440px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    </Flex>
  );
};

export default DetailInfo;
