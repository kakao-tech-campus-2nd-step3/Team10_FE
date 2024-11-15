import { useState } from "react";
import { Text, Flex, Divider, Button, Input } from "@chakra-ui/react";

const MyInfo = () => {
  const [name, setName] = useState("정지민");
  const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("jimin@gmail.com");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("jimin1234");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdateInfo = () => {
    if (newName) setName(newName);
    if (newEmail) setEmail(newEmail);
    if (newPassword) setPassword(newPassword);
    setNewName("");
    setNewEmail("");
    setNewPassword("");
  };

  return (
    <Flex direction="column" gap="5" mx="auto" pt="5" border="none" borderRadius="12px" bgColor="#FFFFFF" dir="column">
      <Flex direction="row" mt={10}>
        <Flex direction="column">
          <Text mt={10} ml={10} color="#06070C" fontSize="20px" fontWeight="medium">
            이름
          </Text>
          <Divider w="300px" ml={10} borderWidth="0.7px" borderColor="#CECECE" orientation="horizontal" />
        </Flex>
        <Input
          w="215px"
          h="35px"
          mt={10}
          ml={10}
          borderWidth="0.7px"
          borderColor="#000000"
          _placeholder={{ color: "#D9D9D9", fontSize: "18px", fontWeight: "medium" }}
          onChange={e => setName(e.target.value)}
          placeholder={name}
          value={newName}
        />
      </Flex>
      <Flex direction="row">
        <Flex direction="column">
          <Text mt={10} ml={10} color="#06070C" fontSize="20px" fontWeight="medium">
            이메일
          </Text>
          <Divider w="300px" ml={10} borderWidth="0.7px" borderColor="#CECECE" orientation="horizontal" />
        </Flex>
        <Input
          w="215px"
          h="35px"
          mt={10}
          ml={10}
          borderWidth="0.7px"
          borderColor="#000000"
          _placeholder={{ color: "#D9D9D9", fontSize: "18px", fontWeight: "medium" }}
          onChange={e => setEmail(e.target.value)}
          placeholder={email}
          value={newEmail}
        />
      </Flex>
      <Flex direction="row">
        <Flex direction="column">
          <Text mt={10} ml={10} color="#06070C" fontSize="20px" fontWeight="medium">
            비밀번호
          </Text>
          <Divider w="300px" ml={10} borderWidth="0.7px" borderColor="#CECECE" orientation="horizontal" />
        </Flex>
        <Input
          w="215px"
          h="35px"
          mt={10}
          ml={10}
          borderWidth="0.7px"
          borderColor="#000000"
          _placeholder={{ color: "#D9D9D9", fontSize: "18px", fontWeight: "medium" }}
          onChange={e => setPassword(e.target.value)}
          placeholder={password}
          value={newPassword}
        />
      </Flex>

      <Flex justify="center">
        <Button
          w="230px"
          h="50px"
          mt={50}
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="bold"
          borderWidth="1px"
          borderColor="#22543D"
          borderRadius="12px"
          _hover={{
            bgColor: "#22543D",
            borderColor: "#22543D",
          }}
          bgColor="#22543D"
          onClick={handleUpdateInfo}
        >
          수정하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default MyInfo;
