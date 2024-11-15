import { Text } from "@chakra-ui/react";
import ListView from "@components/ItemView/ListView";
import Card, { CardProps } from "@components/common/Card";
import ProductOrderItem from "@components/features/MyPage/OrderItem/ProductOrderItem";
import { Order } from "@type/index";

type OrderItemProps = {
  item: Order;
} & CardProps;

const OrderItem = ({ item, ...props }: OrderItemProps) => (
  <Card {...props} borderWidth="2px" px="5" py="5" gap="5">
    <Text>주문번호 : {item.id}</Text>
    <ListView
      gap="10"
      items={item.products.map(p => ({
        ...p,
        id: p.product.id,
      }))}
      ItemComponent={ProductOrderItem}
    />
    <Text fontSize="xl" fontWeight="bold" textAlign="right">
      총 주문 금액 : 12000원
    </Text>
  </Card>
);

export default OrderItem;
