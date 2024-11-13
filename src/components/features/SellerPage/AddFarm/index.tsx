import { useState } from "react";
import { Box, Button, Flex, Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import PriceInfo from "./PriceInfo";
import { Info } from "./type";

type FormData = {
  name: string;
  imageUrl: string;
  categoryId: number;
  description: string;
  price: string;
  maxPeople: string;
  maxTeam: string;
  growEnv: string;
  phoneNumber: string;
};

const defaultFormData = {
  name: "",
  imageUrl: "000.jpg",
  categoryId: 0,
  description: "",
  price: "",
  maxPeople: "",
  maxTeam: "",
  growEnv: "",
  phoneNumber: "",
};

const defaultInfo = {
  title: "",
  productImageState: "",
  detailTitles: ["", "", ""],
  detailDescriptions: ["", "", ""],
  detailImages: ["", "", ""],
};

const AddFarm = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [info, setInfo] = useState<Info>(defaultInfo);

  const [alert, setAlert] = useState<{ message: string; status: "success" | "error" } | null>(null);

  const handleBasicInfoChange = (data: Partial<FormData>) => {
    setFormData(prevData => ({
      ...prevData,
      ...data,
    }));
  };

  const handleDetailInfoChange = (data: Partial<FormData>) => {
    setFormData(prevData => ({
      ...prevData,
      ...data,
    }));
  };

  const handlePriceInfoChange = (data: Partial<FormData>) => {
    setFormData(prevData => ({
      ...prevData,
      ...data,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/products", formData);
      setAlert({ message: `Product registered successfully! ID: ${response}`, status: "success" });
      setFormData(defaultFormData);
    } catch (error) {
      setAlert({ message: "Error registering product. Please try again.", status: "error" });
    }
  };

  return (
    <Box w="1000px" h="1200px" mt={-550} ml={350} borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        {alert && (
          <Alert mb={4} status={alert.status}>
            <AlertIcon />
            {alert.message}
          </Alert>
        )}
        <BasicInfo formData={formData} onChange={handleBasicInfoChange} />
        <DetailInfo
          infoProps={{
            info,
            setInfo,
          }}
          formData={formData}
          onChange={handleDetailInfoChange}
        />
        <PriceInfo formData={formData} onChange={handlePriceInfoChange} />
        <Flex justify="center" direction="row" gap="5px" mt={16} mb={10}>
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

export default AddFarm;
