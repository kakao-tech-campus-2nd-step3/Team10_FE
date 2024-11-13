import { Flex, Input, Text, Divider } from "@chakra-ui/react";

type FormData = {
  price: string;
  maxPeople: string;
  maxTeam: string;
};

type PriceInfoProps = {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
};

const PriceInfo: React.FC<PriceInfoProps> = ({ formData, onChange }) => {
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      onChange({ price: value });
    }
  };

  const handleMaxPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      onChange({ maxPeople: value });
    }
  };

  const handleMaxTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      onChange({ maxTeam: value });
    }
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
          onChange={handlePriceChange}
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
          onChange={handleMaxPeopleChange}
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
          onChange={handleMaxTeamChange}
          value={formData.maxTeam}
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
          팀
        </Text>
      </Flex>
      <Divider w="640px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    </Flex>
  );
};

export default PriceInfo;
