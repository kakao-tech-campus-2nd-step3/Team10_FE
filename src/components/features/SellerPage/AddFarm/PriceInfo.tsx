import { useState } from "react";
import { Flex, Input, Text, Divider } from "@chakra-ui/react";

type FormData = {
  price: string;
  maxPeople: string;
  maxTeam: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

const defaultFormData: FormData = {
  price: "",
  maxPeople: "",
  maxTeam: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
};

type PriceInfoProps = {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
};

const PriceInfo: React.FC<PriceInfoProps> = ({ onChange }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleNumberInputChange = (key: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      const updatedFormData = { ...formData, [key]: value };
      setFormData(updatedFormData);
      onChange(updatedFormData);
    }
  };

  const handleDateTimeChange = (key: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedFormData = { ...formData, [key]: event.target.value };
    setFormData(updatedFormData); // 로컬 상태 업데이트
    onChange(updatedFormData); // 부모 컴포넌트로 상태 전달
  };

  return (
    <Flex direction="column">
      <Text mt={20} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
        가격 및 예약 정보
      </Text>
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          가격
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
          onChange={handleNumberInputChange("price")}
          value={formData.price}
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
          원
        </Text>
      </Flex>
      <Divider w="550px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          최대 인원 수
        </Text>
        <Input
          w="100px"
          h="40px"
          mt={5}
          ml={535}
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
          onChange={handleNumberInputChange("maxPeople")}
          value={formData.maxPeople}
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
          인
        </Text>
      </Flex>
      <Divider w="640px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          동시간대 최대 팀
        </Text>
        <Input
          w="100px"
          h="40px"
          mt={5}
          ml={490}
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
          onChange={handleNumberInputChange("maxTeam")}
          value={formData.maxTeam}
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
          팀
        </Text>
      </Flex>
      <Divider w="640px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          예약 가능 날짜
        </Text>
        <Input
          w="150px"
          h="40px"
          mt={5}
          ml={300}
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
          onChange={handleDateTimeChange("startDate")}
          type="date"
          value={formData.startDate}
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
          ~
        </Text>
        <Input
          w="150px"
          h="40px"
          mt={5}
          ml={5}
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
          onChange={handleDateTimeChange("endDate")}
          type="date"
          value={formData.endDate}
        />
      </Flex>
      <Divider w="430px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          체험 시작 시간
        </Text>
        <Input
          w="170px"
          h="40px"
          mt={5}
          ml={490}
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
          bgColor="#FFFFFF"
          onChange={handleDateTimeChange("startTime")}
          type="time"
          value={formData.startTime}
        />
      </Flex>
      <Divider w="640px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          체험 종료 시간
        </Text>
        <Input
          w="170px"
          h="40px"
          mt={5}
          ml={490}
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
          bgColor="#FFFFFF"
          onChange={handleDateTimeChange("endTime")}
          type="time"
          value={formData.endTime}
        />
      </Flex>
      <Divider w="640px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    </Flex>
  );
};

export default PriceInfo;
