import { useState } from "react";
import { Text, Flex, Button, Input, Box } from "@chakra-ui/react";
import { useUpdateAddress } from "@api/emailApi";
import InputAddressWithMap from "@components/common/InputAddressWithMap";
import { addressSearch } from "@utils/mapUtils";

type PosInfo = {
  latitude: number;
  longitude: number;
};

const defaultPosInfo = {
  latitude: 0,
  longitude: 0,
};

const Delivery = () => {
  const [pos, setPos] = useState<PosInfo>(defaultPosInfo);
  const [newAddress, setNewAddress] = useState("");
  const [newDetailAddress, setNewDetailAddress] = useState("");

  const { mutate: updateAddress } = useUpdateAddress();

  const handleUpdateAddress = () => {
    const updateData = {
      defaultAddress: newAddress,
      addressDetail: newDetailAddress,
      coordinateX: pos.latitude,
      coordinateY: pos.longitude,
    };

    updateAddress(updateData, {
      onSuccess: () => {
        setNewAddress("");
        setNewDetailAddress("");
      },
    });
  };

  const handleAddressChange = async (value: string) => {
    setNewAddress(value);
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

  return (
    <Flex
      direction="column"
      gap="5"
      h="100%"
      mx="auto"
      pt="8"
      border="none"
      borderRadius="12px"
      bgColor="#FFFFFF"
      dir="column"
    >
      {/* <Text color="#000000" fontSize="20px" fontWeight="bold">
        {"현재 배송지 : "}
        <Text as="span" fontWeight="medium">
          {currentAddress}
        </Text>
      </Text> */}
      <Box>
        <Text color="#000000" fontSize="16px" fontWeight="bold">
          도로명 주소
        </Text>
        <InputAddressWithMap
          wrapperProps={{
            h: "350px",
          }}
          alwaysOpen
          w="500px"
          h="48px"
          borderWidth="0.7px"
          borderColor="#E2E8F0"
          _placeholder={{ color: "#E2E8F0", fontSize: "18px", fontWeight: "medium" }}
          onAddressChange={handleAddressChange}
          address={newAddress}
        />
      </Box>
      <Box>
        <Text color="#000000" fontSize="16px" fontWeight="bold">
          상세 주소
        </Text>
        <Input
          w="500px"
          h="48px"
          borderWidth="0.7px"
          borderColor="#E2E8F0"
          _placeholder={{ color: "#E2E8F0", fontSize: "18px", fontWeight: "medium" }}
          onChange={e => setNewDetailAddress(e.target.value)}
          placeholder="새 도로명 주소 입력"
          value={newDetailAddress}
        />
      </Box>

      <Button
        w="230px"
        h="50px"
        mx="auto"
        mt="3"
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
  );
};

export default Delivery;
