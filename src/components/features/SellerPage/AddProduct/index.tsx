import { useState } from "react";
import { Button, Flex, Box, Alert, AlertIcon } from "@chakra-ui/react";
import { useCreateProducts } from "@api/productApi";

import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import PriceInfo from "./PriceInfo";

type FormData = {
  categoryId: number;
  name: string;
  description: string;
  imageUrl: string;
  stock: string;
  price: string;
  growEnv: string;
  addressDetail: string;
  shippingFee: string;
  phoneNumber: string;
};

const defaultFormData = {
  categoryId: 0,
  name: "",
  description: "",
  imageUrl: "",
  stock: "",
  price: "",
  growEnv: "",
  addressDetail: "",
  shippingFee: "",
  phoneNumber: "",
};

const defaultInfo = {
  title: "",
  mainImage: "",
  detailTitles: ["", "", ""],
  detailDescriptions: ["", "", ""],
  detailImages: ["", "", ""],
};

const AddProduct = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [info, setInfo] = useState(defaultInfo);
  const [address, setAddress] = useState<string>("");

  const handleAddressChange = (value: string) => {
    setAddress(value);
  };

  const [alert, setAlert] = useState<{ message: string; status: "success" | "error" } | null>(null);
  const { mutateAsync: createProduct } = useCreateProducts();

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
    createProduct(formData)
      .then(response => {
        setAlert({ message: `Product registered successfully! ID: ${response}`, status: "success" });
        setFormData(defaultFormData);
      })
      .catch(() => {
        setAlert({ message: "Error registering product. Please try again.", status: "error" });
      });
  };

  return (
    <Box w="1000px" h="100%" mt={-550} ml={350} borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        {alert && (
          <Alert mb={4} status={alert.status}>
            <AlertIcon />
            {alert.message}
          </Alert>
        )}
        <BasicInfo formData={formData} onChange={handleBasicInfoChange} />
        <DetailInfo
          onAddressChange={handleAddressChange}
          address={address}
          infoProps={{ info, setInfo }}
          formData={formData}
          onChange={handleDetailInfoChange}
        />
        <PriceInfo formData={formData} onChange={handlePriceInfoChange} />
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
            onClick={handleSubmit}
          >
            등록하기
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AddProduct;
