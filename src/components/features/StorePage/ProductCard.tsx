import { Flex, Text } from "@chakra-ui/react";
import Avatar from "@components/common/Avatar";
import Card, { CardProps } from "@components/common/Card";
import Image from "@components/common/Image";
import { Product } from "@type/index";

type ProductCardProps = {
  item: Product;
} & CardProps;

const ProductCard = ({ item, ...props }: ProductCardProps) => (
  <Card {...props}>
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
);

export default ProductCard;
