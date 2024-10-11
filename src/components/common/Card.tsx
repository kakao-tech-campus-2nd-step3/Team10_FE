import { Flex, type FlexProps } from "@chakra-ui/react";

export type CardProps = FlexProps;

const Card = (props: CardProps) => (
  <Flex direction="column" bg="white" borderRadius="10" {...props}>
    {props?.children}
  </Flex>
);

export default Card;
