import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={routers} />;

export default AppRouter;
