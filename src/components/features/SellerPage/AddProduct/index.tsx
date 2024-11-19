import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Box, Alert, AlertIcon } from "@chakra-ui/react";
import { useCreateProducts, useUpdateProducts } from "@api/productApi";

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
  isEdit: false,
};

const defaultInfo = {
  title: "",
  mainImage: "",
  detailTitles: ["", "", ""],
  detailDescriptions: ["", "", ""],
  detailImages: ["", "", ""],
};

type AddProduct = {
  isEdit?: boolean;
  originProduct?: FormData & { id: number };
};

const AddProduct = ({ isEdit, originProduct }: AddProduct) => {
  const [formData, setFormData] = useState<FormData>(originProduct || defaultFormData);
  const [info, setInfo] = useState(defaultInfo);
  const [address, setAddress] = useState<string>("");
  const navigate = useNavigate();

  const handleAddressChange = (value: string) => {
    setAddress(value);
  };

  const [alert, setAlert] = useState<{ message: string; status: "success" | "error" } | null>(null);
  const { mutateAsync: createProduct } = useCreateProducts();
  const { mutateAsync: updateProduct } = useUpdateProducts(originProduct?.id || 0);

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
    if (isEdit) {
      updateProduct(formData)
        .then(() => {
          setAlert({ message: `Product updated successfully!`, status: "success" });
        })
        .catch(() => {
          setAlert({ message: "Error updating product.", status: "error" });
        });
    } else {
      createProduct(formData)
        .then(() => {
          setAlert({ message: `Product registered successfully!`, status: "success" });
          setFormData(defaultFormData);
        })
        .catch(() => {
          setAlert({ message: "Error registering product.", status: "error" });
        });
    }
  };

  const handleCancel = () => navigate("/seller/product-edit");

  return (
    <Box w="1000px" h="fit-content" mx="auto" borderRadius="12px" bgColor="#FFFFFF">
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
            onClick={handleCancel}
          >
            뒤로가기
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
            {isEdit ? "수정하기" : "등록하기"}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AddProduct;
