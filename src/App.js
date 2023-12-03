import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';

function App() {
  let routers =  createBrowserRouter([

  { path : '' , element : <Layout/> , children : [{index : true , element: <Home/>}
  ]
  }
  ])

  return <>
<Layout/>
    </>
}

export default App;
