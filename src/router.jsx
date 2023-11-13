import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/admin/Admin";
import RootLayout from "./pages/RootLayout";


const  router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout />,
        children:[{
            index: true,
            element: <Home/>
        },
            {
                path:"products",
                element: <Products />
            },
            {
                path: "cart",
                element: <Cart />
            },
        ]
    },
    {
        path: "/admin",
        element: <Admin />
    }
])

export default router