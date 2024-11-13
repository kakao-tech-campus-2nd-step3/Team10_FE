import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Image } from "@chakra-ui/react";
import kakao from "@assets/logo/Kakao.png";

const Register = () => {
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    navigate("/EmailLogin");
  };

  return (
    <Flex align="center" justify="center" direction="column">
      <Text color="#FFFFFF" fontSize="28px" fontWeight="bold">
        로그인 / 회원가입
      </Text>
      <Text mt={10} color="#FFFFFF" fontSize="20px" fontWeight="medium">
        우리가 꿈꾸는 내일, 농민과 고객이 함께 만드는 새로운 유통
      </Text>

      <Flex direction="row" mt={10}>
        <Button
          alignItems="center"
          justifyContent="center"
          display="flex"
          w="305px"
          h="45px"
          color="#000000"
          fontSize="15px"
          fontWeight="medium"
          borderWidth="1px"
          borderColor="#FEE500"
          borderRadius="12px"
          _hover={{
            bgColor: "#FEE500",
            borderColor: "#FEE500",
          }}
          bgColor="#FEE500"
        >
          <Image w="18px" h="18px" mr={2} alt="kakao" src={kakao} />
          카카오 로그인
        </Button>
      </Flex>

      <Button
        w="305px"
        h="45px"
        mt={2}
        color="#FFFFFF"
        fontSize="15px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#FFFFFF"
        borderRadius="12px"
        _hover={{
          bgColor: "transparent",
          borderColor: "#FFFFFF",
        }}
        bgColor="transparent"
        onClick={handleCheckboxChange}
      >
        이메일 로그인
      </Button>
    </Flex>
  );
};

export default Register;
