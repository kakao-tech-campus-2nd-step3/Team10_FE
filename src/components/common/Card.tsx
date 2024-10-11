import { Divider, Flex, Text, type FlexProps } from "@chakra-ui/react";

export type CardProps = FlexProps & {
  title?: string;
};

const Card = ({ title, ...props }: CardProps) => (
  <Flex direction="column" bg="white" borderRadius="10" {...props}>
    {title && [
      <Text color="#22543D" fontSize="x-large" fontWeight="bold">
        {title}
      </Text>,
      <Divider mt="2" opacity="1" borderWidth="2px" borderColor="#22543D" />,
    ]}
    {props?.children}
  </Flex>
);

export default Card;
