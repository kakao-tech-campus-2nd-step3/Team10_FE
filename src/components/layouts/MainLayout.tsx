import { Outlet } from "react-router-dom";
import Footer from "@components/layouts/Footer";
import Header from "@components/layouts/Header";

const MainLayout = () => (
  <div className="main-layout">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default MainLayout;
