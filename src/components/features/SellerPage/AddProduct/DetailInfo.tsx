import { useState } from "react";
import { Flex, Input, Text, Divider, Button, FlexProps } from "@chakra-ui/react";

import { AddInfoProps } from "@components/common/AddInfo";

import InputAddressWithMap from "@components/common/InputAddressWithMap";
import AddProductModal from "./AddProductModal";

type FormData = {
  growEnv: string;
  addressDetail: string;
  phoneNumber: string;
};

type DetailInfoProps = {
  infoProps: AddInfoProps;
  address: string;
  onAddressChange: (value: string) => void;

  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
} & FlexProps;

const DetailInfo: React.FC<DetailInfoProps> = ({ infoProps, formData, onChange, address, onAddressChange }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleGrowEnvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ growEnv: event.target.value });
  };

  const handleAddressDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ addressDetail: event.target.value });
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      onChange({ phoneNumber: value });
    }
  };

  return (
    <Flex direction="column">
      <Text mt={20} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
        상세 정보
      </Text>
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          재배 환경
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
          onChange={handleGrowEnvChange}
          value={formData.growEnv}
        />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row" mt={3}>
        <Text mr={400} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          도로명 주소
        </Text>
        <InputAddressWithMap address={address} onAddressChange={onAddressChange} />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          상세 주소
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
          onChange={handleAddressDetailChange}
          value={formData.addressDetail}
        />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          농산물 설명
        </Text>
        <Button
          w="100px"
          h="40px"
          mt={5}
          ml={590}
          color="#5C5C5C"
          fontSize="25px"
          fontWeight="medium"
          borderWidth="1px"
          borderColor="#000000"
          borderRadius="40px"
          _hover={{
            bgColor: "#FFFFFF",
            borderColor: "#000000",
          }}
          bgColor="#FFFFFF"
          onClick={handleOpenModal}
        >
          입력
        </Button>
        {isModalOpen && <AddProductModal infoProps={infoProps} isOpen={isModalOpen} onClose={handleCloseModal} />}
      </Flex>
      <Divider w="700px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          연락처 정보
        </Text>
        <Input
          w="300px"
          h="40px"
          mt={5}
          ml={390}
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
          onChange={handleNumberChange}
          value={formData.phoneNumber}
        />
      </Flex>
      <Divider w="500px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    </Flex>
  );
};

export default DetailInfo;
