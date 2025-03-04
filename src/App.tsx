import Home from "./pages/home/Home"
import Users from "./pages/users/Users"
import Products from "./pages/products/Products"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";


function App() {

  const Layout=()=>{
    return(
      <div className="main">
        <Navbar/>
      
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
      {
        path: "/",
        element: <Home />
      
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
    ]
    },
  
  ]);

  return <RouterProvider router={router} />
}

export default App
