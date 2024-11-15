import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import Card, { CardProps } from "@components/common/Card";
import Image from "@components/common/Image";
import ContactModal from "@components/features/MyPage/Order/ContactModal";
import OrderProcessModal from "@components/features/MyPage/Order/OrderProcessModal";
import { ProductOrderStatus, ProductOrder } from "@type/index";

type ProductOrderItemProps = {
  item: ProductOrder;
} & CardProps;

const statusLabel = {
  ORDERED: "주문 완료",
  PREPARING: "준비 중",
  DELIVERING: "배송 중",
  DELIVERED: "배송 완료",
  REFUNDING: "💬 환불 중",
  REFUNDED: "✖️ 환불 완료",
  CANCELED: "✖️ 주문 취소",
};

const canReview = (status: ProductOrderStatus) => status === "DELIVERED";
const nonButton = (status: ProductOrderStatus) =>
  status === "REFUNDED" || status === "REFUNDING" || status === "CANCELED";
const other = (status: ProductOrderStatus) => !canReview(status) && !nonButton(status);

const contactStatus = (status: ProductOrderStatus) => {
  if (other(status)) return "CANCANCLE";
  if (status === "DELIVERED") return "CANREFUND";
  return "OTHER";
};

const ProductOrderItem = ({ item, ...props }: ProductOrderItemProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isOrderProcessOpen, setIsOrderProcessOpen] = useState(false);

  return (
    <Card {...props} h="100px" w="100%" px="5" align="start" direction="row">
      <Image borderRadius="md" h="100%" aspectRatio="1" src={item.product.mainImage} alt={item.product.name} />
      <Flex justify="center" direction="column" w="330px" h="100%" mx="5">
        <Text fontSize="xl" fontWeight="bold" isTruncated>
          {item.product.name}
        </Text>
        <Text my="auto" isTruncated>
          1000원 • {item.amount}개 + 3000원
          <Text as="span" color="gray.500" fontWeight="bold">
            (배송비)
          </Text>
        </Text>
        <Text color="green.800" fontSize="lg" fontWeight="bold" isTruncated>
          {1000 * item.amount + 3000}원
        </Text>
      </Flex>
      <Flex justify="space-between" direction="column" gap="2" w="150px" h="100%" ml="auto">
        <Button
          h="100%"
          color="green.800"
          bg="transparent"
          borderWidth="2px"
          borderColor="green.800"
          _hover={{
            bg: "transparent",
            transform: "scale(1.1)",
          }}
          onClick={() => setIsContactOpen(true)}
        >
          📞 문의
        </Button>
        {canReview(item.status) && (
          <Button
            h="100%"
            color="white"
            bg="green.800"
            _hover={{
              bg: "green.800",
              transform: "scale(1.1)",
            }}
          >
            ✍️ 리뷰 작성
          </Button>
        )}
        {nonButton(item.status) && (
          <Button
            h="100%"
            color="white"
            bg="gray.400"
            _hover={{
              bg: "gray.400",
            }}
            cursor="not-allowed"
            disabled
          >
            {statusLabel[item.status]}
          </Button>
        )}
        {other(item.status) && [
          <Button
            h="100%"
            color="white"
            bg="green.800"
            _hover={{
              bg: "green.800",
              transform: "scale(1.1)",
            }}
            onClick={() => setIsOrderProcessOpen(true)}
          >
            🗂️ 주문 조회
          </Button>,
          <OrderProcessModal
            productOrder={item}
            isOpen={isOrderProcessOpen}
            onClose={() => setIsOrderProcessOpen(false)}
          />,
        ]}
      </Flex>
      <ContactModal
        productId={item.product.id}
        status={contactStatus(item.status)}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </Card>
  );
};

export default ProductOrderItem;
