import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@components/layouts/MainLayout";
import MyPageLayout from "@components/layouts/MyPageLayout";
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
import FarmListPage from "@pages/MyPage/FarmListPage";
import MyInfoPage from "@pages/MyPage/MyInfoPage";
import MyOrdersPage from "@pages/MyPage/OrdersPage";
import ReviewListPage from "@pages/MyPage/ReviewListPage";
import WithdrawPage from "@pages/MyPage/WithdrawPage";
import RegisterPage from "@pages/RegisterPage";
import SchedulePage from "@pages/SchedulePage";
import SellerMyPage from "@pages/SellerMyPage";
import SellerPage from "@pages/SellerPage";
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
          path: "Seller",
          element: <SellerPage />,
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
              path: "review-list",
              element: <ReviewListPage />,
            },
            {
              path: "farm-list",
              element: <FarmListPage />,
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
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRouter;
