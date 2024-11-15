import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@components/layouts/MainLayout";
import MyPageLayout from "@components/layouts/MyPageLayout";
import SellerLayout from "@components/layouts/SellerLayout";
import BuyerMyPage from "@pages/BuyerMyPage";
import CallbackPage from "@pages/CallbackPage";
import EmailLoginPage from "@pages/EmailLoginPage";
import EmailRegisterPage from "@pages/EmailRegisterPage";
import FarmDetailPage from "@pages/FarmDetailPage";

import FarmerRegisterPage from "@pages/FarmerRegisterPage";
import Home from "@pages/Home";
import IntroductionPage from "@pages/Introduction";
import MyPage from "@pages/MyPage";
import DeliveryPage from "@pages/MyPage/DeliveryPage";
import MyInfoPage from "@pages/MyPage/MyInfoPage";
import MyOrdersPage from "@pages/MyPage/OrdersPage";
import WithdrawPage from "@pages/MyPage/WithdrawPage";
import ProductCartPage from "@pages/ProductCartPage";
import RegisterPage from "@pages/RegisterPage";
import SchedulePage from "@pages/SchedulePage";
import SellerMyPage from "@pages/SellerMyPage";
import SellerPage from "@pages/SellerPage";
import BizRegister from "@pages/SellerPage/BizRegister";
import FarmEdit from "@pages/SellerPage/FarmEdit";
import FarmRegister from "@pages/SellerPage/FarmRegister";
import ProductEdit from "@pages/SellerPage/ProductEdit";
import ProductRegister from "@pages/SellerPage/ProductRegister";
import RecentOrders from "@pages/SellerPage/RecentOrders";
import SellerMyInfo from "@pages/SellerPage/SellerMyInfo";
import SellerProductListPage from "@pages/SellerPage/SellerProductList";
import SellerWithdraw from "@pages/SellerPage/SellerWithdraw";
import SoldOuts from "@pages/SellerPage/SoldOuts";
import TaxCalculator from "@pages/SellerPage/TaxCalculator";
import StoreDetailPage from "@pages/StoreDetailPage";
import StorePage from "@pages/StorePage";

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
          path: "schedule/:scheduleId",
          element: <FarmDetailPage />,
        },
        {
          path: "seller",
          element: <SellerLayout />,
          children: [
            {
              index: true,
              element: <SellerPage />,
            },
            {
              path: "recent-orders",
              element: <RecentOrders />,
            },
            {
              path: "sold-outs",
              element: <SoldOuts />,
            },
            {
              path: "tax-calculator",
              element: <TaxCalculator />,
            },
            {
              path: "biz-reg",
              element: <BizRegister />,
            },
            {
              path: "product-reg",
              element: <ProductRegister />,
            },
            {
              path: "product-edit",
              children: [
                {
                  index: true,
                  element: <SellerProductListPage />,
                },
                {
                  path: ":productId",
                  element: <ProductEdit />,
                },
              ],
            },
            {
              path: "farm-reg",
              element: <FarmRegister />,
            },
            {
              path: "farm-edit",
              element: <FarmEdit />,
            },
            {
              path: "my-info",
              element: <SellerMyInfo />,
            },
            {
              path: "withdraw",
              element: <SellerWithdraw />,
            },
          ],
        },
        {
          path: "me",
          element: <MyPageLayout />,
          children: [
            {
              index: true,
              element: <MyPage />,
            },
            {
              path: "orders",
              element: <MyOrdersPage />,
            },
            {
              path: "delivery",
              element: <DeliveryPage />,
            },
            {
              path: "my-info",
              element: <MyInfoPage />,
            },
            {
              path: "withdraw",
              element: <WithdrawPage />,
            },
          ],
        },
        {
          path: "login",
          element: <RegisterPage />,
        },
        {
          path: "email/login",
          element: <EmailLoginPage />,
        },
        {
          path: "email/register",
          element: <EmailRegisterPage />,
        },
        {
          path: "farmer/register",
          element: <FarmerRegisterPage />,
        },
        {
          path: "store",
          element: <StorePage />,
        },
        {
          path: "callback/:provider",
          element: <CallbackPage />,
        },
        {
          path: "schedule",
          element: <SchedulePage />,
        },
        {
          path: "cart/product",
          element: <ProductCartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRouter;
