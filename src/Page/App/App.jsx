import { BrowserRouter, useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "../Home";
import Contact from "../Contact";
import Torneria from "../Torneria";
import Notfound from "../Notfound";
import Pendientes from "../Pendientes";
import Campaña from "../Campaña";
import Login from "../Login";
import Inventario from '../Maquinarias';
import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Layout/footer";

const AppRoutes = () => {
      let routes = useRoutes ([
        {path: '/', element: <Home/>},
        {path: '/contacto', element: <Contact/>},
        {path: '/torneria', element: <Torneria/>},
        {path: '/pendientes', element: <Pendientes/>},
        {path: '/campaña', element: <Campaña/>},
        {path: '/maquinarias', element: <Inventario/>},
        {path: '/torneria/:categoria', element: <Torneria/>},
        {path: '/login', element: <Login/>},
        {path:'*', element: <Notfound />},
      ])

    return routes
 
}

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <AppRoutes/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
