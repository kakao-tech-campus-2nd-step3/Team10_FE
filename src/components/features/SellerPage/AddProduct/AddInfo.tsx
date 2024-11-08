import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Flex, Input, Divider, Text, Button, Icon } from "@chakra-ui/react";

const AddInfo = () => {
  const [productImageState, setProductImageState] = useState<string>("000.jpg");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProductImageState(file.name);
    }
  };

  return (
    <Flex direction="column">
      <Flex direction="row">
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          제목
        </Text>
        <Input
          w="600px"
          h="40px"
          ml={160}
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

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          메인 이미지
        </Text>
        <Icon
          as={UploadOutlined}
          mt={1}
          ml={5}
          color="#000000"
          fontSize="30px"
          cursor="pointer"
          onClick={() => document.getElementById("file-input")?.click()}
        />
        <Input display="none" accept="image/*" id="file-input" onChange={handleImageChange} type="file" />
        <Text ml={500} color="#CECECE" fontSize="28px" fontWeight="bold">
          {productImageState}
        </Text>
      </Flex>
      <Divider w="795px" borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 제목1
        </Text>
        <Input
          w="600px"
          h="40px"
          ml={100}
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

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 설명1
        </Text>
        <Input
          w="600px"
          h="40px"
          ml={100}
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

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 이미지1
        </Text>
        <Icon
          as={UploadOutlined}
          mt={1}
          ml={5}
          color="#000000"
          fontSize="30px"
          cursor="pointer"
          onClick={() => document.getElementById("file-input")?.click()}
        />
        <Input display="none" accept="image/*" id="file-input" onChange={handleImageChange} type="file" />
        <Text ml={500} color="#CECECE" fontSize="28px" fontWeight="bold">
          {productImageState}
        </Text>
      </Flex>
      <Divider w="795px" borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 제목2
        </Text>
        <Input
          w="600px"
          h="40px"
          ml={100}
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

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 설명2
        </Text>
        <Input
          w="600px"
          h="40px"
          ml={100}
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

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 이미지2
        </Text>
        <Icon
          as={UploadOutlined}
          mt={1}
          ml={5}
          color="#000000"
          fontSize="30px"
          cursor="pointer"
          onClick={() => document.getElementById("file-input")?.click()}
        />
        <Input display="none" accept="image/*" id="file-input" onChange={handleImageChange} type="file" />
        <Text ml={500} color="#CECECE" fontSize="28px" fontWeight="bold">
          {productImageState}
        </Text>
      </Flex>
      <Divider w="795px" borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 제목3
        </Text>
        <Input
          w="600px"
          h="40px"
          ml={100}
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

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 설명3
        </Text>
        <Input
          w="600px"
          h="40px"
          ml={100}
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

      <Flex direction="row" mt={5}>
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          상세 이미지3
        </Text>
        <Icon
          as={UploadOutlined}
          mt={1}
          ml={5}
          color="#000000"
          fontSize="30px"
          cursor="pointer"
          onClick={() => document.getElementById("file-input")?.click()}
        />
        <Input display="none" accept="image/*" id="file-input" onChange={handleImageChange} type="file" />
        <Text ml={500} color="#CECECE" fontSize="28px" fontWeight="bold">
          {productImageState}
        </Text>
      </Flex>
      <Divider w="795px" borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
      <Button
        w="200px"
        h="50px"
        mt={5}
        ml={850}
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
        저장하기
      </Button>
    </Flex>
  );
};

export default AddInfo;
