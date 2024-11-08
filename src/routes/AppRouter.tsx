import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@components/layouts/MainLayout";
import BuyerMyPage from "@pages/BuyerMyPage";
import FarmDetailPage from "@pages/FarmDetailPage";
import Home from "@pages/Home";
import IntroductionPage from "@pages/Introduction";
import MyPage from "@pages/MyPage";
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
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRouter;
