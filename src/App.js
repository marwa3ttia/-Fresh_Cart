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
    {index : true , element: <Home/>},
    {index : 'cart' , element: <Cart/>},
    {index : 'about' , element: <About/>},
    {index : 'products' , element: <Products/>},
    {index : 'categories' , element: <Categories/>},
    {index : 'brands' , element: <Brands/>},
    {index : 'productdetails' , element: <ProductDetails/>},
    {index : 'register' , element: <Register/>},
    {index : 'login' , element: <Login/>},
  ]}
  ])

  return <RouterProvider router={routers}/>
}

export default App;
