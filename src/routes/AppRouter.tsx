import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@components/layouts/MainLayout";
import Home from "@pages/Home";
import IntroductionPage from "@pages/Introduction";

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
    ],
  },
]);

const AppRouter = () => <RouterProvider router={routers} />;

export default AppRouter;
