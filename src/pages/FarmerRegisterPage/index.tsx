import { Box, Flex } from "@chakra-ui/react";
import register from "@assets/Image/Intro/Register.png";
import Farmer from "@components/features/RegisterPage/Farmer";

const FarmerRegisterPage = () => (
  <Flex pos="relative" align="center" justify="center" w="100vw" h="100vh">
    <Box
      pos="absolute"
      zIndex={0}
      top={0}
      left={0}
      w="100%"
      h="100%"
      bgImage={`url(${register})`}
      bgSize="cover"
      bgPosition="center"
    />
    <Box pos="absolute" zIndex={1} top={0} right={0} bottom={0} left={0} bgColor="rgba(0, 0, 0, 0.5)" />
    <Box zIndex={3}>
      <Farmer />
    </Box>
  </Flex>
);

export default FarmerRegisterPage;
