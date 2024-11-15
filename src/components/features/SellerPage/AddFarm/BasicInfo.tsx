import { useRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Flex, Input, Icon, Text, Divider, Select } from "@chakra-ui/react";
import Image from "@components/common/Image";

type FormData = {
  name: string;
  description: string;
  imageUrl: string;
  categoryId: number;
  businessNumber: string;
};

type BasicInfoProps = {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
};

const BasicInfo: React.FC<BasicInfoProps> = ({ formData, onChange }) => {
  const mainImageInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onChange({ imageUrl });
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: event.target.value });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ description: event.target.value });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    onChange({ categoryId: value });
  };

  const handleBusinessNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      onChange({ businessNumber: value });
    }
  };

  return (
    <Flex direction="column">
      <Text mt={10} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
        기본 정보
      </Text>
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          농장 이름
        </Text>
        <Input
          w="200px"
          h="40px"
          mt={5}
          ml={520}
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
          onChange={handleNameChange}
          value={formData.name}
        />
      </Flex>
      <Divider w="610px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          한 줄 설명
        </Text>
        <Input
          w="300px"
          h="40px"
          mt={5}
          ml={420}
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
          onChange={handleDescriptionChange}
          value={formData.description}
        />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Flex w="550px">
          <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
            농장 사진 업로드
          </Text>
        </Flex>
        <Icon
          as={UploadOutlined}
          mx="5"
          mt={6}
          ml={3}
          color="#000000"
          fontSize="30px"
          cursor="pointer"
          onClick={() => mainImageInputRef.current?.click()}
        />
        <Flex pos="relative" align="flex-end" justify="flex-end" w="100%" h="200px" mt="5" mr={95}>
          <Image flexShrink="0" w="200px" h="200px" objectFit="cover" alt="main image" src={formData.imageUrl} />
          <Input ref={mainImageInputRef} display="none" accept="image/*" onChange={handleImageChange} type="file" />
        </Flex>
      </Flex>

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          재배 품목
        </Text>
        <Select
          w="200px"
          mt={5}
          ml={520}
          onChange={handleCategoryChange}
          placeholder="잎채소"
          value={formData.categoryId}
        >
          <option value={1}>잎채소</option>
          <option value={2}>과일</option>
          <option value={3}>열매채소</option>
          <option value={4}>곡물</option>
          <option value={5}>뿌리채소</option>
        </Select>
      </Flex>
      <Divider w="600px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          사업자 번호
        </Text>
        <Input
          w="200px"
          h="40px"
          mt={5}
          ml={500}
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
          onChange={handleBusinessNumberChange}
          value={formData.businessNumber}
        />
      </Flex>
      <Divider w="610px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    </Flex>
  );
};

export default BasicInfo;
