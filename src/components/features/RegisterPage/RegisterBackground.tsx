import { Flex } from "@chakra-ui/react";
import ImageCard from "@components/common/ImageCard";

const RegisterBackground = ({ children }: { children: React.ReactNode }) => (
  <ImageCard
    borderRadius="0"
    imageProps={{
      filter: "auto",
      brightness: "0.5",
    }}
    w="100vw"
    h="100vh"
    bgImg="/assets/image/register.png"
  >
    <Flex align="center" justify="center" w="100%" h="100%">
      {children}
    </Flex>
  </ImageCard>
);

export default RegisterBackground;
