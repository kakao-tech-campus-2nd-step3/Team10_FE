import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import Avatar from "@components/common/Avatar";
import Card, { CardProps } from "@components/common/Card";
import Image from "@components/common/Image";
import { Product } from "@type/index";

export type ProductCardProps = {
  item: Product & { link?: string };
} & CardProps;

const ProductCard = ({ item, ...props }: ProductCardProps) => (
  <Box {...(!item.link && { as: Link, to: item.link })}>
    <Card {...props} _hover={item.link ? { transform: "translateY(-10px)" } : {}}>
      <Image w="full" borderRadius="2xl" alt={item.name} aspectRatio="1" src={item.mainImage} />
      <Flex py="3">
        <Text maxW="70%" fontSize="lg" fontWeight="bold" isTruncated>
          {item.name}
        </Text>
        {item?.tag && (
          <Text ml="auto" px="3" color="white" bg="#22543D" borderRadius="lg">
            {item.tag}
          </Text>
        )}
      </Flex>
      <Text>{item.unit}</Text>
      <Text my="3">{item.pricePerGram}</Text>
      <Text overflow="hidden" color="#999" noOfLines={3}>
        {item.description}
      </Text>
      <Text color="#999">{item.farm.address}</Text>
      <Flex align="center" py="3">
        <Avatar src={item.farm.profile} />
        <Text ml="1">{item.farm.name}</Text>
      </Flex>
    </Card>
  </Box>
);

export default ProductCard;
