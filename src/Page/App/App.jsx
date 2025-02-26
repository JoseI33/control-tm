import { BrowserRouter, useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "../Home";
import Contact from "../Contact";
import Torneria from "../Torneria";
import CardsDetail from "../CardsDetail";
import Notfound from "../Notfound";
import Pendientes from "../Pendientes";
import Campaña from "../Campaña";
import Login from "../Login";
import Inventario from '../Maquinarias';
import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Layout/footer";
import Tracto from "../Torneria/tracto";
import Volcadoras from "../Torneria/volcadora";
import AutoeleDoosan from "../Torneria/autodoosan";
import AutoeleMitsubishi from "../Torneria/automitsubishi";
import AutoeleManitou from "../Torneria/automanitou";
import Tractores from "../Torneria/tractores";

const AppRoutes = () => {
      let routes = useRoutes ([
        {path: '/', element: <Home/>},
        {path: '/contacto', element: <Contact/>},
        {path: '/torneria', element: <Torneria/>},
        {path: '/torneria/tracto', element: <Tracto/>},
        {path: '/torneria/autoelevador-doosan', element: <AutoeleDoosan/>},
        {path: '/torneria/volcadoras', element: <Volcadoras/>},
        {path: '/torneria/autoelevador-manitou', element: <AutoeleManitou/>},
        {path: '/torneria/autoelevador-mitsubishi', element: <AutoeleMitsubishi/>},
        {path: '/torneria/tractores', element: <Tractores/>},
        {path: '/pendientes', element: <Pendientes/>},
        {path: '/campaña', element: <Campaña/>},
        {path: '/maquinarias', element: <Inventario/>},
        {path: '/torneria/:id', element: <CardsDetail/>},
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
