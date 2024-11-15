import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Footer from "@components/layouts/Footer";
import Header from "@components/layouts/Header";
import size from "@constants/size";

const MainLayout = () => (
  <div className="main-layout">
    <Header />
    <Box w="100vw" minH={`calc(100vh - ${size.header.h})`}>
      <Outlet />
    </Box>
    <Footer />
  </div>
);

export default MainLayout;
