import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Category from "@components/features/MyPage/Category";
import size from "@constants/size";

const MyPageLayout = () => (
  <Flex justify="center" direction="row" w="100vw" minH={`calc(100vh - ${size.header.h})`} py="10" bg="#F5F5F5">
    <Flex gap="10" w="1100px">
      <Category />
      <Outlet />
    </Flex>
  </Flex>
);

export default MyPageLayout;
