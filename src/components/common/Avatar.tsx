import { Avatar as ChakraAvatar, AvatarProps as ChakraAvatarProps } from "@chakra-ui/react";

type AvatarProps = ChakraAvatarProps & {
  defaultImage?: string;
};

const Avatar = ({ src, defaultImage = "/assets/image/default-image.svg", ...props }: AvatarProps) => (
  <ChakraAvatar src={src || defaultImage} {...props} />
);

export default Avatar;
