import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import About from './Components/About/About';
import Categories from './Components/Categories/Categories';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Brands from './Components/Brands/Brands';


function App() {
  let routers =  createBrowserRouter([

  { path : '' , element : <Layout/> , children : [
    {index : '/' , element: <Home/>},
    {path : 'cart' , element: <Cart/>},
    {path : 'about' , element: <About/>},
    {path : 'products' , element: <Products/>},
    {path : 'categories' , element: <Categories/>},
    {path : 'brands' , element: <Brands/>},
    {path : 'productdetails' , element: <ProductDetails/>},
    {path : 'register' , element: <Register/>},
    {path : 'login' , element: <Login/>},
  ]}
  ])

  return <RouterProvider router={routers}/>
}

export default App;
