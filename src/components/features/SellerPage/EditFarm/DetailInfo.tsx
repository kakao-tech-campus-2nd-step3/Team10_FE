import { useState } from "react";
import { Flex, Input, Button, Text, Divider } from "@chakra-ui/react";
import EditFarmModal from "./EditFarmModal";

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
          h="40px"
          mt={5}
          ml={420}
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          borderWidth="0.7px"
          borderColor="#000000"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#FFFFFF"
        />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          위치
        </Text>
        <Input
          w="300px"
          h="40px"
          mt={5}
          ml={475}
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          borderWidth="0.7px"
          borderColor="#000000"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#FFFFFF"
        />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          농장 설명
        </Text>

        <Button
          w="100px"
          h="40px"
          mt={5}
          ml={620}
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
          수정
        </Button>
        {isModalOpen && <EditFarmModal isOpen={isModalOpen} onClose={handleCloseModal} />}
      </Flex>
      <Divider w="690px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          연락처 정보
        </Text>
        <Input
          w="50px"
          h="40px"
          mt={7}
          ml={340}
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          borderWidth="0.7px"
          borderColor="#000000"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#FFFFFF"
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="bold">
          -
        </Text>
        <Input
          w="100px"
          h="40px"
          mt={7}
          ml={5}
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          borderWidth="0.7px"
          borderColor="#000000"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#FFFFFF"
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="bold">
          -
        </Text>
        <Input
          w="100px"
          h="40px"
          mt={7}
          ml={5}
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          borderWidth="0.7px"
          borderColor="#000000"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#FFFFFF"
        />
      </Flex>
      <Divider w="450px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    </Flex>
  );
};

export default DetailInfo;
