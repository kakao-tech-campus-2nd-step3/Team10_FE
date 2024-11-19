import { Flex } from "@chakra-ui/react";
import Card from "@components/common/Card";

import ProductWish from "@components/features/MyPage/Wishlist/ProductWish";

const WishPage = () => (
  <Flex align="center" justify="center" h="100%">
    <Card title="위시리스트" w="80%" h="fit-content" p="10">
      <ProductWish />
    </Card>
  </Flex>
);

export default WishPage;
