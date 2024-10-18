import { Image as ChakraImage, ImageProps as ChakraImageProps } from "@chakra-ui/react";

type ImageProps = ChakraImageProps & {
  defaultImage?: string;
};

const Image = ({ src, defaultImage = "/assets/image/default-image.svg", ...props }: ImageProps) => (
  <ChakraImage src={src || defaultImage} {...props} />
);

export default Image;
