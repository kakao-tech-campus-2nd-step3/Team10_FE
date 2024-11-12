import { Flex, Image, Link, Text } from "@chakra-ui/react";
import Card from "@components/common/Card";
import ImageCard from "@components/common/ImageCard";

const StoreBanner = () => (
  <Flex columnGap="10" h="150px">
    <Card w="full" justify="center" bg="#1C4532" flexDirection="row">
      <Image h="full" src="/assets/image/vegetables.png" />
      <Flex align="center" justify="center" direction="column" w="470px" h="full" color="white">
        <Text fontSize="xl" fontWeight="bold">
          믿고 먹는 건간한 먹거리,{" "}
          <Text as="span" color="#48BB78">
            품앗이
          </Text>{" "}
          농산물!
        </Text>
        <Text mt="5" fontSize="sm" lineHeight="initial" textAlign="center">
          신뢰할 수 있는 인증된 농부 할머니, 할아버지들이 직접 재배하여 배송하는,
          <br />
          자연 그대로의 방식으로 정성껏 재배한 건강한 농산물을 제공합니다.
          <br />
          깨끗한 땅에서 자란 안전한 먹거리로, 내 가족의 식탁에도 안심하고 올릴 수 있습니다.
        </Text>
      </Flex>
    </Card>
    <ImageCard
      w="250px"
      flexShrink="0"
      h="full"
      bgImg="/assets/image/fresh_veggies.png"
      imageProps={{
        filter: "auto",
        brightness: 0.8,
      }}
    >
      <Flex as={Link} justify="center" direction="column" w="full" h="full" px="8" href="/seller/register">
        <Text color="white" fontSize="sm" fontWeight="bold">
          혹시 팔러 오셨나요?
        </Text>
        <Text mx="auto" mt="5" color="white" fontSize="lg" fontWeight="bold">
          농업인 등록하러 가기
        </Text>
      </Flex>
    </ImageCard>
  </Flex>
);

export default StoreBanner;
