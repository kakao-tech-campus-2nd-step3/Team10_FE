import { useState } from "react";
import { Text, Flex, Image, Box, Divider, Button, Input } from "@chakra-ui/react";
import map from "@assets/Image/Farm/Farm2.png";

interface DeliveryProps {
  setIsDeliveryVisible: (visible: boolean) => void;
}

const Delivery: React.FC<DeliveryProps> = ({ setIsDeliveryVisible }) => {
  const [currentAddress, setCurrentAddress] = useState("부산광역시 금정구 개금동 78-1번지");
  const [newAddress, setNewAddress] = useState("");
  const [newDetailAddress, setNewDetailAddress] = useState("");

  const handleUpdateAddress = () => {
    setCurrentAddress(newAddress);
    setNewAddress("");
    setNewDetailAddress("");
    setIsDeliveryVisible(false);
  };

  return (
    <Box w="700px" h="800px" mt={-415} ml={350} border="none" borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={10} ml={10} color="#22543D" fontSize="20px" fontWeight="bold">
          배송지 수정
        </Text>
        <Divider w="600px" ml={10} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />
        <Flex direction="row">
          <Text mt={10} ml={78} color="#000000" fontSize="20px" fontWeight="bold">
            현재 배송지 :
          </Text>
          <Text mt={10} ml={2} color="#000000" fontSize="20px" fontWeight="medium">
            {currentAddress}
          </Text>
        </Flex>
        <Text mt={10} ml={78} color="#000000" fontSize="16px" fontWeight="bold">
          도로명 주소
        </Text>
        <Input
          w="500px"
          h="48px"
          mt={1}
          ml={78}
          borderWidth="0.7px"
          borderColor="#E2E8F0"
          _placeholder={{ color: "#E2E8F0", fontSize: "18px", fontWeight: "medium" }}
          onChange={e => setNewAddress(e.target.value)}
          placeholder="새 도로명 주소 입력"
          value={newAddress}
        />
        <Text mt={3} ml={78} color="#000000" fontSize="16px" fontWeight="bold">
          상세 주소
        </Text>
        <Input
          w="500px"
          h="48px"
          mt={1}
          ml={78}
          borderWidth="0.7px"
          borderColor="#E2E8F0"
          _placeholder={{ color: "#E2E8F0", fontSize: "18px", fontWeight: "medium" }}
          onChange={e => setNewAddress(e.target.value)}
          placeholder="새 상세 주소 입력"
          value={newDetailAddress}
        />
        <Image w="500px" h="300px" mt={5} ml={78} alt="map" src={map} />

        <Flex justify="center">
          <Button
            w="230px"
            h="50px"
            mt={10}
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
            onClick={handleUpdateAddress}
          >
            수정하기
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Delivery;
