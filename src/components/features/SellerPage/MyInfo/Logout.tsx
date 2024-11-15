import { Text, Flex, Box, Divider, Button } from "@chakra-ui/react";

const Logout = () => (
  <Box w="700px" h="300px" mx="auto" border="none" borderRadius="12px" bgColor="#FFFFFF">
    <Flex direction="column">
      <Text mt={10} ml={10} color="#22543D" fontSize="20px" fontWeight="bold">
        회원 탈퇴
      </Text>
      <Divider w="600px" ml={10} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />
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
  </Box>
);

export default Logout;
