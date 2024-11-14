import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Input } from "@chakra-ui/react";
import { useRegisterEmail } from "@api/authApi";

type RegisterData = {
  email: string;
  password: string;
  name: string;
};

const defaultRegisterData: RegisterData = {
  email: "",
  password: "",
  name: "",
};

const EmailRegister = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState<RegisterData>(defaultRegisterData);

  const { mutateAsync: emailRegister } = useRegisterEmail();

  const handleRegister = () => {
    emailRegister(registerData)
      .then(data => {
        if (data) {
          navigate("/email/login");
        }
      })
      .catch(() => {
        alert("회원가입에 실패했습니다.");
      });
  };

  const handleCheckboxChange1 = () => {
    navigate("/email/login");
  };

  return (
    <Flex align="center" justify="center" direction="column">
      <Text mt={5} color="#FFFFFF" fontSize="40px" fontWeight="bold">
        회원가입
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
          이름
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
          onChange={e => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
          value={registerData.name}
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
          이메일
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
          onChange={e => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
          value={registerData.email}
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
          비밀번호
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
          onChange={e => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
          type="password"
          value={registerData.password}
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
          onClick={handleCheckboxChange1}
        >
          이전 화면으로 돌아가기
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
          회원가입 하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default EmailRegister;
