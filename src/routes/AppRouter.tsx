import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@components/layouts/MainLayout";
import BuyerMyPage from "@pages/BuyerMyPage";
import Home from "@pages/Home";
import IntroductionPage from "@pages/Introduction";
import SellerMyPage from "@pages/SellerMyPage";

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
    ],
  },
]);

const AppRouter = () => <RouterProvider router={routers} />;

export default AppRouter;
