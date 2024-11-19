import { Flex, Text } from "@chakra-ui/react";
import ListView from "@components/ItemView/ListView";
import Card from "@components/common/Card";
import OrderItem from "@components/features/MyPage/OrderItem";
import mockOrders from "@mocks/mockItem/mockOrder";
import { Order } from "@type/index";

const sortedOrders = mockOrders.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());

const splitedOrders = sortedOrders.reduce<Order[][]>((acc, cur) => {
  const last = acc[acc.length - 1];
  if (!last || last[0].orderDate !== cur.orderDate) {
    acc.push([cur]);
  } else {
    last.push(cur);
  }
  return acc;
}, []);

const MyOrdersPage = () => (
  <Card title="상품 주문 내역" w="100%" p="10">
    {splitedOrders.map(orders => (
      <Flex key={orders[0].orderDate} direction="column">
        <Text py="2">{orders[0].orderDate}</Text>
        <ListView gap="5" items={orders} ItemComponent={OrderItem} />
      </Flex>
    ))}
  </Card>
);

export default MyOrdersPage;
