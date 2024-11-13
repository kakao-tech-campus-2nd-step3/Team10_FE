import { Flex, ImageProps } from "@chakra-ui/react";
import Card, { CardProps } from "@components/common/Card";
import Image from "@components/common/Image";

export type ImageCardProps = CardProps & {
  bgImg?: string;
  imageProps?: ImageProps;
};

const ImageCard = ({ bgImg, imageProps, ...props }: ImageCardProps) => (
  <Card pos="relative" {...props} overflow="hidden">
    <Image w="full" h="full" objectFit="cover" src={bgImg} {...imageProps} />
    <Flex pos="absolute" w="full" h="full">
      {props?.children}
    </Flex>
  </Card>
);

export default ImageCard;
