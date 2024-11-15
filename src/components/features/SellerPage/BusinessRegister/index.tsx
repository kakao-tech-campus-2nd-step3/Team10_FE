import { useState, useRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Box, Button, Icon, Input, Text, Divider, Flex, Alert, AlertIcon } from "@chakra-ui/react";
import { useCreateBusiness } from "@api/businessApi";
import Image from "@components/common/Image";

type FormData = {
  number: string;
  imageUrl: string;
};

const defaultFormData: FormData = {
  number: "",
  imageUrl: "",
};

const BusinessRegister = () => {
  const mainImageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prevData => ({ ...prevData, imageUrl }));
    }
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      setFormData(prevData => ({ ...prevData, number: value }));
    }
  };

  const [alert, setAlert] = useState<{ message: string; status: "success" | "error" } | null>(null);
  const { mutateAsync: createBusiness } = useCreateBusiness();

  const validateFormData = () => {
    const { number, imageUrl } = formData;

    if (!number) {
      setAlert({ message: "사업자 번호를 입력하세요.", status: "error" });
      return false;
    }

    if (!imageUrl) {
      setAlert({ message: "사업자 등록증 이미지를 업로드하세요.", status: "error" });
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateFormData()) {
      return;
    }

    createBusiness(formData)
      .then(response => {
        setAlert({ message: `Business registered successfully! ID: ${response}`, status: "success" });
        setFormData(defaultFormData);
      })
      .catch(() => {
        setAlert({ message: "Error registering business. Please try again.", status: "error" });
      });
  };

  return (
    <Box w="900px" h="100%" mx="auto" border="none" borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        {alert && (
          <Alert mb={4} status={alert.status}>
            <AlertIcon />
            {alert.message}
          </Alert>
        )}
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
            onChange={handleNumberChange}
            value={formData.number}
          />
        </Flex>
        <Divider w="530px" ml={10} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

        <Flex direction="row">
          <Flex w="550px">
            <Text mt={5} ml={10} color="#000000" fontSize="20px" fontWeight="bold">
              사업자 등록증 업로드
            </Text>
          </Flex>
          <Icon
            as={UploadOutlined}
            mx="5"
            mt={5}
            ml={-100}
            color="#000000"
            fontSize="25px"
            cursor="pointer"
            onClick={() => mainImageInputRef.current?.click()}
          />
          <Flex pos="relative" align="flex-end" justify="flex-end" w="100%" h="200px" mt="5" mr={110}>
            <Image flexShrink="0" w="200px" h="200px" objectFit="cover" alt="main image" src={formData.imageUrl} />
            <Input ref={mainImageInputRef} display="none" accept="image/*" onChange={handleImageChange} type="file" />
          </Flex>
        </Flex>

        <Flex justify="center" direction="row" gap="5px" my="10">
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
            onClick={handleSubmit}
          >
            등록하기
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BusinessRegister;
