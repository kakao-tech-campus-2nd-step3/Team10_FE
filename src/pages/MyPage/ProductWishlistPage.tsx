import Card from "@components/common/Card";

import ProductWish from "@components/features/MyPage/Wishlist/ProductWish";

const ProductWishlistPage = () => (
  <Card title="위시리스트-농산물" w="100%" h="fit-content" p="10">
    <ProductWish />
  </Card>
);

export default ProductWishlistPage;
