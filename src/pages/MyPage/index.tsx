import { Flex } from "@chakra-ui/react";
import Category from "@components/features/MyPage/Category";

const MyPage = () => (
  <Flex direction="row" minH="100vh" bgColor="#D9D9D9">
    <Flex mt={20} mb={50} ml={200}>
      <Category />
    </Flex>
  </Flex>
);

export default MyPage;
