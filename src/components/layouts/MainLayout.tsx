import { Outlet } from "react-router-dom";
import Footer from "@components/layouts/Footer";

const MainLayout = () => (
  <div className="main-layout">
    <Outlet />
    <Footer />
  </div>
);

export default MainLayout;
