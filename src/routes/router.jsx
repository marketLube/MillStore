import { createBrowserRouter } from "react-router-dom";
import Userlayout from "../Layout/Userlayout";
import Homepage from "../pages/Homepage/Homepage";
import AllProducts from "../pages/productpage/Allproducts";
import ProductDetails from "../pages/productpage/ProductDetails";
import Profile from "../pages/profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Userlayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/product",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
