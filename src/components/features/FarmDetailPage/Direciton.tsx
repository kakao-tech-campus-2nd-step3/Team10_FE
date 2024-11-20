import { Text, Flex, Divider } from "@chakra-ui/react";
import KaKaoMap from "@components/common/KaKaoMap";

type DirecitonProps = {
  key: string;
  lat: number;
  lng: number;
};

const Direction = ({ key, lat, lng }: DirecitonProps) => (
  <Flex align="center" direction="column">
    <Text mt={100} ml={-1000} color="#1C4532" fontSize="24px" fontWeight="bold">
      오시는 길
    </Text>
    <Divider w="1100px" mt={3} borderWidth="0.7px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
    <Flex direction="column" w="1100px" mt={10} mb={20}>
      <KaKaoMap
        pins={[
          {
            key,
            lat,
            lng,
          },
        ]}
        w="100%"
        aspectRatio="2"
      />
    </Flex>
  </Flex>
);

export default Direction;
