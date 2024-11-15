import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import SellerCategory from "@components/features/SellerPage/SellerCategory";
import size from "@constants/size";

const SellerLayout = () => (
  <Flex direction="row" w="100vw" h={`calc(100vh - ${size.header.h})`} bg="#F5F5F5">
    <SellerCategory />
    <Box overflowY="scroll" w="calc(100vw - 230px)" h="100%" py="10">
      <Outlet />
    </Box>
  </Flex>
);

export default SellerLayout;
