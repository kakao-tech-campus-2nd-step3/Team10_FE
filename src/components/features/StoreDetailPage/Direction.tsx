import { Text, Flex, Image, Divider } from "@chakra-ui/react";

const Direction = () => (
  <Flex direction="column">
    <Text mt={100} ml={200} color="#1C4532" fontSize="24px" fontWeight="bold">
      오시는 길
    </Text>
    <Divider
      w="1100px"
      mt={3}
      ml={200}
      borderWidth="0.7px"
      borderColor="rgba(56, 56, 56, 0.5)"
      orientation="horizontal"
    />
  </Flex>
);

export default Direction;
