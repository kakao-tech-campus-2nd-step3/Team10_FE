import { WarningOutlined } from "@ant-design/icons";
import { Box, Divider, Text, Flex, Icon } from "@chakra-ui/react";

// import ProductCard from "@components/features/StorePage/ProductCard";

// import { Product } from "@type/index";
import SalesChart from "./SalesChart";
import SalesTrendChart from "./SalesTrendChart";

// type MainProps = {
//   item: Product;
// };

const salesData = [
  { weekNumber: 1, count: 120 },
  { weekNumber: 2, count: 200 },
  { weekNumber: 3, count: 150 },
  { weekNumber: 4, count: 170 },
  { weekNumber: 5, count: 250 },
];

const Main = () => (
  <Flex direction="column">
    <Flex direction="row" gap="10px">
      <Box w="570px" h="360px" mt={10} ml={20} border="none" borderRadius="12px" bgColor="#FFFFFF">
        <Flex direction="column">
          <Text mt={3} ml={5} color="#22543D" fontSize="20px" fontWeight="bold">
            판매 수익 분포
          </Text>
          <Divider w="470px" mb={5} ml={5} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />
          <SalesChart />
        </Flex>
      </Box>
      <Box w="490px" h="360px" mt={10} ml={5} border="none" borderRadius="12px" bgColor="#FFFFFF">
        <Flex direction="column">
          <Text mt={3} ml={5} color="#22543D" fontSize="20px" fontWeight="bold">
            매출 추세
          </Text>
          <Divider w="400px" ml={5} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />
          <SalesTrendChart data={salesData} />
        </Flex>
      </Box>
    </Flex>

    <Box w="1090px" h="605px" mt={10} ml={20} border="none" borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={5} ml={5} color="#22543D" fontSize="20px" fontWeight="bold">
          반응이 좋은 농산물
        </Text>
        <Divider w="955px" ml={5} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />
        {/* <ProductCard item={item} /> */}
      </Flex>
    </Box>

    <Box w="1090px" h="257px" mt={10} mb={10} ml={20} border="none" borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={5} ml={5} color="#22543D" fontSize="20px" fontWeight="bold">
          주의사항
        </Text>
        <Divider w="955px" ml={5} borderWidth="2px" borderColor="#22543D" orientation="horizontal" />
        <Flex direction="row">
          <Icon as={WarningOutlined} mt={10} ml={10} color="#C60101" fontSize="30px" />
          <Text mt={10} ml={2} color="#C60101" fontSize="24px" fontWeight="bold">
            아래의 횟수나 규모를 초과하실 경우, 사업자 등록을 부탁드립니다.
          </Text>
        </Flex>
      </Flex>
      <Text mt={3} ml={10} color="#000000" fontSize="20px" fontWeight="medium">
        - 거래 횟수가 20회 이상인 경우
      </Text>
      <Text mt={1} ml={10} color="#000000" fontSize="20px" fontWeight="medium">
        - 거래 규모가 1200만원 이상인 경우
      </Text>
    </Box>
  </Flex>
);

export default Main;
