import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Input, Image } from "@chakra-ui/react";
import { useCreateFarmer } from "@api/emailApi";
import call from "@assets/logo/Call.png";
import useLogin from "@hooks/useLogin";

type FarmerData = {
  name: string;
  address: string;
  phone: string;
};

const defaultFarmerData: FarmerData = {
  name: "",
  address: "",
  phone: "",
};

const Farmer = () => {
  const handleImageClick = () => {
    alert("010-1234-1234로 연락 바랍니다.");
  };

  const [farmerData, setFarmerData] = useState<FarmerData>(defaultFarmerData);

  const { mutateAsync: createFarmer } = useCreateFarmer();
  const navigate = useNavigate();

  const { refreshLogin } = useLogin();

  const handleRegister = () => {
    createFarmer(farmerData)
      .then(() => {
        refreshLogin().then(() => navigate("/"));
      })
      .catch(() => {
        alert("농부 등록에 실패했습니다.");
      });
  };

  const handleCancelRegister = () => {
    navigate("/");
  };

  return (
    <Flex align="center" justify="center" direction="column">
      <Text mt={5} color="#FFFFFF" fontSize="40px" fontWeight="bold">
        추가 정보 입력
      </Text>
      <Text mt={3} color="#FFFFFF" fontSize="20px" fontWeight="medium">
        아래 정보를 정확히 입력해 주시기 바랍니다.
      </Text>

      <Flex direction="row" mt={5}>
        <Flex
          align="center"
          justify="center"
          w="210px"
          h="80px"
          p="10px"
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="light"
          borderWidth="1px"
          borderColor="#FFFFFF"
          borderRadius="12px"
          bgColor="transparent"
        >
          전화번호
        </Flex>

        <Input
          w="700px"
          h="80px"
          ml={5}
          p="10px"
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="light"
          borderWidth="1px"
          borderColor="#FFFFFF"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          bgColor="transparent"
          onChange={e => setFarmerData(prev => ({ ...prev, phone: e.target.value }))}
          value={farmerData.phone}
        />
      </Flex>

      <Flex direction="row" mt={5}>
        <Flex
          align="center"
          justify="center"
          w="210px"
          h="80px"
          p="10px"
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="light"
          borderWidth="1px"
          borderColor="#FFFFFF"
          borderRadius="12px"
          bgColor="transparent"
        >
          상점 이름
        </Flex>
        <Input
          w="700px"
          h="80px"
          ml={5}
          p="10px"
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="light"
          borderWidth="1px"
          borderColor="#FFFFFF"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          bgColor="transparent"
          onChange={e => setFarmerData(prev => ({ ...prev, name: e.target.value }))}
          value={farmerData.name}
        />
      </Flex>

      <Flex direction="row" mt={5}>
        <Flex
          align="center"
          justify="center"
          w="210px"
          h="80px"
          p="10px"
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="light"
          borderWidth="1px"
          borderColor="#FFFFFF"
          borderRadius="12px"
          bgColor="transparent"
        >
          상점 주소
        </Flex>
        <Input
          w="700px"
          h="80px"
          ml={5}
          p="10px"
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="light"
          borderWidth="1px"
          borderColor="#FFFFFF"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          bgColor="transparent"
          onChange={e => setFarmerData(prev => ({ ...prev, address: e.target.value }))}
          value={farmerData.address}
        />
      </Flex>

      <Flex direction="row" mt={10}>
        <Button
          w="388px"
          h="70px"
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="medium"
          borderWidth="1px"
          borderColor="#000000"
          borderRadius="12px"
          _hover={{
            bgColor: "#000000",
            borderColor: "#000000",
          }}
          bgColor="#000000"
          onClick={handleCancelRegister}
        >
          등록 취소하기
        </Button>
        <Button
          w="388px"
          h="70px"
          ml={5}
          color="#000000"
          fontSize="24px"
          fontWeight="medium"
          borderWidth="1px"
          borderColor="#FFFFFF"
          borderRadius="12px"
          _hover={{
            bgColor: "#FFFFFF",
            borderColor: "#FFFFFF",
          }}
          bgColor="#FFFFFF"
          onClick={handleRegister}
        >
          등록하기
        </Button>
      </Flex>

      <Flex direction="row">
        <Text mt={150} ml={500} color="#FFFFFF" fontSize="24px" fontWeight="ligt">
          우측 하단의 고객센터에 문의하시면 전화 상담을 통해 간편하게 가입 절차를 도와드립니다.
        </Text>
        <Image w="80px" h="80px" mt={110} ml={5} cursor="pointer" alt="call" onClick={handleImageClick} src={call} />
      </Flex>
    </Flex>
  );
};

export default Farmer;
