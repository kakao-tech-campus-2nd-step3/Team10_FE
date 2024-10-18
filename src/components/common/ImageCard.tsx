import { Flex } from "@chakra-ui/react";
import Card, { CardProps } from "@components/common/Card";
import Image from "@components/common/Image";

export type ImageCardProps = CardProps & {
  bgImg?: string;
};

const ImageCard = ({ bgImg, ...props }: ImageCardProps) => (
  <Card pos="relative" {...props} overflow="hidden">
    <Image w="full" h="full" objectFit="cover" src={bgImg} />
    <Flex pos="absolute" w="full" h="full">
      {props?.children}
    </Flex>
  </Card>
);

export default ImageCard;
