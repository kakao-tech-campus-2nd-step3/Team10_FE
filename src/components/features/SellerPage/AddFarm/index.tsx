import { useState } from "react";
import { Box, Button, Flex, Alert, AlertIcon } from "@chakra-ui/react";

import { useCreateFarms, useUpdateFarms } from "@api/farmApi";
import { Info } from "@components/common/type";
import { addressSearch } from "@utils/mapUtils";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import PriceInfo from "./PriceInfo";

type FormData = {
  userId: number;
  name: string;
  imageUrl: string;
  categoryId: number;
  businessNumber: string;
  description: string;
  price: string;
  maxPeople: string;
  maxTeam: string;
  growEnv: string;
  addressDetail: string;
  phoneNumber: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

const defaultFormData = {
  userId: 0,
  name: "",
  imageUrl: "",
  categoryId: 0,
  businessNumber: "",
  description: "",
  price: "",
  maxPeople: "",
  maxTeam: "",
  growEnv: "",
  addressDetail: "",
  phoneNumber: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
};

const defaultInfo = {
  title: "",
  mainImage: "",
  detailTitles: ["", "", ""],
  detailDescriptions: ["", "", ""],
  detailImages: ["", "", ""],
};

type PosInfo = {
  latitude: number;
  longitude: number;
};

const defaultPosInfo = {
  latitude: 0,
  longitude: 0,
};

type AddFarm = {
  isEdit?: boolean;
  originFarm?: FormData & { id: number };
};

const AddFarm = ({ isEdit, originFarm }: AddFarm) => {
  const [formData, setFormData] = useState<FormData>(originFarm || defaultFormData);
  const [info, setInfo] = useState<Info>(defaultInfo);
  const [, setPos] = useState<PosInfo>(defaultPosInfo);
  const [address, setAddress] = useState<string>("");
  const { mutateAsync: createFarm } = useCreateFarms();
  const { mutateAsync: updateFarm } = useUpdateFarms(originFarm?.id || 0);

  const handleAddressChange = async (value: string) => {
    setAddress(value);
    const result = await addressSearch(value).catch(() => []);

    if (result.length === 1) {
      setPos({
        latitude: result[0].lat,
        longitude: result[0].lng,
      });
    } else {
      setPos(defaultPosInfo);
    }
  };

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
    if (isEdit) {
      updateFarm(formData)
        .then(() => {
          setAlert({ message: `Farm updated successfully!`, status: "success" });
        })
        .catch(() => {
          setAlert({ message: "Error updating farm.", status: "error" });
        });
    } else {
      createFarm(formData)
        .then(() => {
          setAlert({ message: `Farm registered successfully!`, status: "success" });
          setFormData(defaultFormData);
        })
        .catch(() => {
          setAlert({ message: "Error registering farm.", status: "error" });
        });
    }
  };

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

export default AddFarm;
