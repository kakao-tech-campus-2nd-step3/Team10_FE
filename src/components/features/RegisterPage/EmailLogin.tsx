import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Input } from "@chakra-ui/react";
import { useLoginEmail } from "@api/authApi";
import useLogin from "@hooks/useLogin";

type LoginData = {
  email: string;
  password: string;
};

const defaultLoginData: LoginData = {
  email: "",
  password: "",
};

const EmailLogin = () => {
  const navigate = useNavigate();
  const { login } = useLogin();
  const [loginData, setLoginData] = useState<LoginData>(defaultLoginData);

  const { mutateAsync: emailLogin } = useLoginEmail();

  const handleLogin = () => {
    emailLogin(loginData)
      .then(data => {
        if (data) {
          login(data.access);
          navigate("/");
        }
      })
      .catch(() => {
        alert("로그인에 실패했습니다.");
      });
  };

  const handleCheckboxChange = () => {
    navigate("/email/register");
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
        _placeholder={{ color: "#FFFFFF" }}
        bgColor="transparent"
        onChange={e => setLoginData(prev => ({ ...prev, email: e.target.value }))}
        placeholder="이메일"
        value={loginData.email}
      />
      <Input
        w="700px"
        h="80px"
        mt={5}
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
        _placeholder={{ color: "#FFFFFF" }}
        bgColor="transparent"
        onChange={e => setLoginData(prev => ({ ...prev, password: e.target.value }))}
        placeholder="비밀번호"
        type="password"
        value={loginData.password}
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
        onClick={handleLogin}
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
