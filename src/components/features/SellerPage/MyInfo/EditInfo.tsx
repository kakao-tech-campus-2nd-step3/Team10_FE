import { useState } from "react";
import { Text, Flex, Box, Divider, Button, Input } from "@chakra-ui/react";

const EditInfo = () => {
  const [name, setName] = useState("정지민");
  const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("jimin@gmail.com");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("jimin1234");
  const [newPassword, setNewPassword] = useState("");
  const [number, setNumber] = useState("01012341234");
  const [newNumber, setNewNumber] = useState("");
  const [storeName, setStoreName] = useState("건호네 포도");
  const [newStoreName, setNewStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("부산광역시 개금동");
  const [newStoreAddress, setNewStoreAddress] = useState("");

  const handleUpdateInfo = () => {
    if (newName) setName(newName);
    if (newEmail) setEmail(newEmail);
    if (newPassword) setPassword(newPassword);
    if (newNumber) setNumber(newNumber);
    if (newStoreName) setStoreName(newStoreName);
    if (newStoreAddress) setStoreAddress(newStoreAddress);
    setNewName("");
    setNewEmail("");
    setNewPassword("");
    setNewNumber("");
    setNewStoreName("");
    setNewStoreAddress("");
  };

  return (
    <Box w="700px" h="770px" mx="auto" border="none" borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={10} ml={10} color="#22543D" fontSize="20px" fontWeight="bold">
          내 정보 수정
        </Text>
        <Divider w="600px" ml={10} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />

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
        <Flex direction="row">
          <Flex direction="column">
            <Text mt={10} ml={10} color="#06070C" fontSize="20px" fontWeight="medium">
              전화번호
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
            onChange={e => setNumber(e.target.value)}
            placeholder={number}
            value={newNumber}
          />
        </Flex>
        <Flex direction="row">
          <Flex direction="column">
            <Text mt={10} ml={10} color="#06070C" fontSize="20px" fontWeight="medium">
              상점 이름
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
            onChange={e => setStoreName(e.target.value)}
            placeholder={storeName}
            value={newStoreName}
          />
        </Flex>
        <Flex direction="row">
          <Flex direction="column">
            <Text mt={10} ml={10} color="#06070C" fontSize="20px" fontWeight="medium">
              상점 주소
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
            onChange={e => setStoreAddress(e.target.value)}
            placeholder={storeAddress}
            value={newStoreAddress}
          />
        </Flex>

        <Flex justify="center">
          <Button
            w="230px"
            h="50px"
            mt={70}
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
    </Box>
  );
};

export default EditInfo;
