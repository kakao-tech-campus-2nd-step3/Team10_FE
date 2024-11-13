import { Flex, Input, Text, Divider } from "@chakra-ui/react";

type FormData = {
  price: string;
  stock: string;
  shippingFee: string;
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

  const handleStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      onChange({ stock: value });
    }
  };

  const handleShippingFeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      onChange({ shippingFee: value });
    }
  };
  return (
    <Flex direction="column">
      <Text mt={20} ml={20} color="#000000" fontSize="36px" fontWeight="bold">
        가격 정보
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
          최대 수량
        </Text>
        <Input
          w="100px"
          h="40px"
          mt={5}
          ml={565}
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
          onChange={handleStockChange}
          value={formData.stock}
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
          개
        </Text>
      </Flex>
      <Divider w="650px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      <Flex direction="row">
        <Text mt={5} ml={20} color="#000000" fontSize="28px" fontWeight="bold">
          배송비
        </Text>
        <Input
          w="200px"
          h="40px"
          mt={5}
          ml={495}
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
          onChange={handleShippingFeeChange}
          value={formData.shippingFee}
        />
        <Text mt={6} ml={5} color="#000000" fontSize="28px" fontWeight="medium">
          원
        </Text>
      </Flex>
      <Divider w="550px" ml={20} borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    </Flex>
  );
};

export default PriceInfo;
