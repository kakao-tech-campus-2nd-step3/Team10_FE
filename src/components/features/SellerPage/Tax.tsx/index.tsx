import React, { useState } from "react";
import { Box, Button, Input, Text, Divider, Flex } from "@chakra-ui/react";

const Tax = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [supplyValue, setSupplyValue] = useState("");
  const [taxValue, setTaxValue] = useState("");

  const handleConfirm = () => {
    const total = parseFloat(totalAmount.replace(/,/g, ""));
    if (!Number.isNaN(total)) {
      const calculatedSupplyValue = Math.round(total / 1.1);
      const calculatedTaxValue = Math.round(total - calculatedSupplyValue);

      setSupplyValue(calculatedSupplyValue.toLocaleString());
      setTaxValue(calculatedTaxValue.toLocaleString());
    }
  };

  const handleReset = () => {
    setTotalAmount("");
    setSupplyValue("");
    setTaxValue("");
  };

  return (
    <Box w="900px" minH="100vh" mx="auto" border="none" borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={10} ml={10} color="#22543D" fontSize="20px" fontWeight="bold">
          세금 계산기
        </Text>
        <Divider w="750px" ml={10} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />

        <Flex justify="center" direction="column">
          <Text mt={10} color="#000000" fontSize="25px" fontWeight="bold" textAlign="center">
            합계 금액(TOTAL)
          </Text>
          <Flex justify="center" direction="row">
            <Input
              w="350px"
              h="50px"
              mt={10}
              p="10px"
              color="#06070c"
              fontSize="20px"
              fontWeight="medium"
              textAlign="right"
              borderWidth="0.7px"
              borderColor="#000000"
              borderRadius="12px"
              _focus={{
                outline: "none",
                border: "0.7px solid #22543D",
              }}
              _placeholder={{ color: "#D9D9D9", fontSize: "20px", fontWeight: "medium" }}
              bgColor="#FFFFFF"
              onChange={e => setTotalAmount(e.target.value)}
              placeholder="금액을 입력해주세요."
              value={totalAmount}
            />
            <Text mt={10} ml={3} color="#000000" fontSize="28px" fontWeight="medium">
              원
            </Text>
          </Flex>

          <Flex justify="center" direction="row" gap="5px" mt={10}>
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
              onClick={handleReset}
            >
              다시하기
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
              onClick={handleConfirm}
            >
              확인하기
            </Button>
          </Flex>
        </Flex>

        <Flex direction="column">
          <Text mt={20} ml={10} color="#000000" fontSize="25px" fontWeight="bold">
            공급가액(VALUE OF SUPPLY)
          </Text>
          <Flex direction="row" mt={5} ml={10}>
            <Input
              w="350px"
              h="50px"
              p="10px"
              color="#06070c"
              fontSize="20px"
              fontWeight="medium"
              textAlign="right"
              borderWidth="0.7px"
              borderColor="#000000"
              borderRadius="12px"
              _focus={{
                outline: "none",
                border: "0.7px solid #22543D",
              }}
              _placeholder={{ color: "#D9D9D9", fontSize: "20px", fontWeight: "medium" }}
              bgColor="#FFFFFF"
              placeholder="00,000,000"
              readOnly
              value={supplyValue}
            />
            <Text ml={3} color="#000000" fontSize="28px" fontWeight="medium">
              원
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" mt={5}>
          <Text mt={10} ml={10} color="#000000" fontSize="25px" fontWeight="bold">
            부가세액(TAX)
          </Text>
          <Flex direction="row" mt={5} ml={10}>
            <Input
              w="350px"
              h="50px"
              p="10px"
              color="#06070c"
              fontSize="20px"
              fontWeight="medium"
              textAlign="right"
              borderWidth="0.7px"
              borderColor="#000000"
              borderRadius="12px"
              _focus={{
                outline: "none",
                border: "0.7px solid #22543D",
              }}
              _placeholder={{ color: "#D9D9D9", fontSize: "20px", fontWeight: "medium" }}
              bgColor="#FFFFFF"
              placeholder="00,000,000"
              readOnly
              value={taxValue}
            />
            <Text ml={3} color="#000000" fontSize="28px" fontWeight="medium">
              원
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Tax;
