import { Text, Flex, Button } from "@chakra-ui/react";

const Withdraw = () => (
  <Flex direction="column" gap="5" mx="auto" pt="5" border="none" borderRadius="12px" bgColor="#FFFFFF" dir="column">
    <Flex justify="center">
      <Text mt={50} color="#000000" fontSize="20px" fontWeight="bold">
        정말 탈퇴하시겠어요?
      </Text>
    </Flex>
    <Flex justify="center">
      <Button
        w="230px"
        h="50px"
        mt={50}
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
      >
        탈퇴하기
      </Button>
    </Flex>
  </Flex>
);

export default Withdraw;
