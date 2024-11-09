import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@components/layouts/MainLayout";
import BuyerMyPage from "@pages/BuyerMyPage";
import EmailLoginPage from "@pages/EmailLoginPage";
import EmailRegisterPage from "@pages/EmailRegisterPage";
import FarmDetailPage from "@pages/FarmDetailPage";

import Home from "@pages/Home";
import IntroductionPage from "@pages/Introduction";
import MyPage from "@pages/MyPage";
import RegisterPage from "@pages/RegisterPage";
import SellerMyPage from "@pages/SellerMyPage";
import SellerPage from "@pages/SellerPage";
import StoreDetailPage from "@pages/StoreDetailPage";

const AppRouter = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "introduction",
          element: <IntroductionPage />,
        },
        {
          path: "BuyerMyPage",
          element: <BuyerMyPage />,
        },
        {
          path: "SellerMyPage",
          element: <SellerMyPage />,
        },
        {
          path: "StoreDetail",
          element: <StoreDetailPage />,
        },
        {
          path: "FarmDetail",
          element: <FarmDetailPage />,
        },
        {
          path: "Seller",
          element: <SellerPage />,
        },
        {
          path: "MyPage",
          element: <MyPage />,
        },
        {
          path: "Register",
          element: <RegisterPage />,
        },
        {
          path: "EmailLogin",
          element: <EmailLoginPage />,
        },
        {
          path: "EmailRegister",
          element: <EmailRegisterPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRouter;
