import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Box, Button, Icon, Input, Text, Divider, Flex } from "@chakra-ui/react";

const BusinessRegister = () => {
  const [businessImageState, setBusinessImageState] = useState<string>("000.jpg");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBusinessImageState(file.name);
    }
  };

  return (
    <Box w="900px" h="800px" mt={-550} ml={400} border="none" borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={10} ml={10} color="#22543D" fontSize="20px" fontWeight="bold">
          사업자 등록
        </Text>
        <Divider w="750px" ml={10} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />
        <Box
          w="750px"
          h="350px"
          mt={10}
          ml={10}
          borderWidth="0.7px"
          borderColor="#000000"
          borderRadius="12px"
          bgColor="#FFFFFF"
        >
          <Text mt={5} ml={10} color="#000000" fontSize="25px" fontWeight="bold">
            사업자 등록 안내
          </Text>
          <Text mt={5} ml={10} color="#000000" fontSize="20px" fontWeight="medium">
            - 사업상 독립적으로 재화 또는 용역을 공급하는 사업자는 사업자등록을 하여야 합니다.
          </Text>
          <Text mt={5} ml={10} color="#000000" fontSize="20px" fontWeight="medium">
            - 실제 사업을 하는 사업자는 사업자등록을 하여야 하며, 명의대여 시 사업과 관련한 각종
            <br />
            세금이 명의를 빌려준 사람에게 나옵니다.
          </Text>
          <Text mt={5} ml={10} color="#000000" fontSize="20px" fontWeight="medium">
            - 세금을 못 낼 경우 명의를 빌려준 사업자의 재산이 압류·공매되고 신용불량자가 되는 등<br /> 큰 피해를 볼 수
            있습니다.
          </Text>
          <Text mt={5} ml={10} color="#000000" fontSize="20px" fontWeight="medium">
            - 실질사업자가 밝혀지더라도 명의를 빌려준 책임을 피할 수는 없습니다.
          </Text>
        </Box>
        <Flex direction="row">
          <Text mt={10} ml={10} color="#000000" fontSize="20px" fontWeight="bold">
            사업자 번호
          </Text>
          <Input
            w="200px"
            h="40px"
            mt={10}
            ml={460}
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
        <Divider w="530px" ml={10} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

        <Flex direction="row">
          <Text mt={5} ml={10} color="#000000" fontSize="20px" fontWeight="bold">
            사업자 등록증 업로드
          </Text>
          <Icon
            as={UploadOutlined}
            mt={5}
            ml={5}
            color="#000000"
            fontSize="25px"
            cursor="pointer"
            onClick={() => document.getElementById("file-input")?.click()}
          />
          <Input display="none" accept="image/*" id="file-input" onChange={handleImageChange} type="file" />
          <Text mt={5} ml={430} color="#CECECE" fontSize="28px" fontWeight="bold">
            {businessImageState}
          </Text>
        </Flex>
        <Divider w="750px" ml={10} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

        <Flex justify="center" direction="row" gap="5px" mt={20} mb={10}>
          <Button
            w="230px"
            h="53px"
            color="#22543D"
            fontSize="24px"
            fontWeight="bold"
            borderWidth="1px"
            borderColor="#22543D"
            borderRadius="12px"
            _hover={{
              bgColor: "#FFFFFF",
              borderColor: "#22543D",
            }}
            bgColor="#FFFFFF"
          >
            취소하기
          </Button>
          <Button
            w="230px"
            h="53px"
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
          >
            등록하기
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BusinessRegister;
