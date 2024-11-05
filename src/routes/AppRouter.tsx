import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@components/layouts/MainLayout";
import BuyerMyPage from "@pages/BuyerMyPage";
import FarmDetailPage from "@pages/FarmDetailPage";
import Home from "@pages/Home";
import IntroductionPage from "@pages/Introduction";
import SellerMyPage from "@pages/SellerMyPage";
import StoreDetailPage from "@pages/StoreDetailPage";
import StorePage from "@pages/StorePage";

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
        path: "store",
        element: <StorePage />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={routers} />;

export default AppRouter;
