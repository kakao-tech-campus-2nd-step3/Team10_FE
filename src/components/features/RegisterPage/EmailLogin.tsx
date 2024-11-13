import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Input } from "@chakra-ui/react";

const EmailLogin = () => {
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    navigate("/EmailRegister");
  };

  return (
    <Flex align="center" justify="center" direction="column">
      <Text color="#FFFFFF" fontSize="40px" fontWeight="bold">
        이메일 로그인
      </Text>
      <Input
        w="700px"
        h="80px"
        mt={20}
        p="10px"
        fontSize="24px"
        fontWeight="light"
        borderWidth="1px"
        borderColor="#FFFFFF"
        borderRadius="12px"
        _focus={{
          outline: "none",
          border: "0.7px solid #22543D",
        }}
        _placeholder={{ color: "#FFFFFF" }}
        bgColor="transparent"
        placeholder="이메일"
      />
      <Input
        w="700px"
        h="80px"
        mt={5}
        p="10px"
        fontSize="24px"
        fontWeight="light"
        borderWidth="1px"
        borderColor="#FFFFFF"
        borderRadius="12px"
        _focus={{
          outline: "none",
          border: "0.7px solid #22543D",
        }}
        _placeholder={{ color: "#FFFFFF" }}
        bgColor="transparent"
        placeholder="비밀번호"
      />

      <Button
        w="388px"
        h="70px"
        mt={10}
        color="#FFFFFF"
        fontSize="24px"
        fontWeight="medium"
        borderWidth="1px"
        borderColor="#FFFFFF"
        borderRadius="12px"
        _hover={{
          bgColor: "transparent",
          borderColor: "#FFFFFF",
        }}
        bgColor="transparent"
      >
        로그인
      </Button>
      <Button
        w="388px"
        h="70px"
        mt={5}
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
        onClick={handleCheckboxChange}
      >
        회원가입
      </Button>
    </Flex>
  );
};

export default EmailLogin;
