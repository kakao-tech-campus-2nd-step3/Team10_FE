import { useNavigate } from "react-router-dom";
import { Button, Text, Flex } from "@chakra-ui/react";
import KaKaoLoginButton from "@components/common/KaKaoLoginButton";

const Register = () => {
  const navigate = useNavigate();

  const handleEmailLogin = () => {
    navigate("/email/login");
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
        <KaKaoLoginButton w="305px" />
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
        borderRadius="8px"
        _hover={{
          bgColor: "transparent",
          borderColor: "#FFFFFF",
        }}
        bgColor="transparent"
        onClick={handleEmailLogin}
      >
        이메일 로그인
      </Button>
    </Flex>
  );
};

export default Register;
