import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Flex, Input, Icon, Text, Divider, Select } from "@chakra-ui/react";

interface BasicInfoProps {
  setFarmImage: (file: File) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ setFarmImage }) => {
  const [farmImageState, setFarmImageState] = useState<string>("000.jpg");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFarmImageState(file.name);
      setFarmImage(file);
    }
  };

  return (
    <Flex direction="column">
      <Text mt={20} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
        기본 정보
      </Text>
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          농장 이름
        </Text>
        <Input
          w="200px"
          h="35px"
          mt="30px"
          ml="520px"
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
      <Divider w="610px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          농장 사진 업로드
        </Text>
        <Icon
          as={UploadOutlined}
          mt={6}
          ml={5}
          color="#000000"
          fontSize="30px"
          cursor="pointer"
          onClick={() => document.getElementById("file-input")?.click()}
        />
        <Input display="none" accept="image/*" id="file-input" onChange={handleImageChange} type="file" />
        <Text mt={5} ml={450} color="#CECECE" fontSize="28px" fontWeight="bold">
          {farmImageState}
        </Text>
      </Flex>
      <Divider w="820px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          재배 품목
        </Text>
        <Select w="200px" mt={5} ml={520} placeholder="과일">
          <option value="option1">잎채소</option>
          <option value="option2">열매채소</option>
          <option value="option3">곡물</option>
          <option value="option3">뿌리채소</option>
        </Select>
      </Flex>
      <Divider w="600px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    </Flex>
  );
};

export default BasicInfo;
