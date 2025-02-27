import Layout from '../../components/Layout';
import './index.css';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="home-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739901249/planilla_tq4wxp.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: 'full', height: '180px' }}>
                <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  <h5 className="card-title text-center">Horometros</h5>
                  <p className="card-text">
                    Control de maquinarias en tiempo real.
                  </p>
                <Link to="/horometro">
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739901249/depositos_a5xbpv.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  <h5 className="card-title text-center">Depósitos</h5>
                  <p className="card-text">
                    Control de stock de repuestos de los depósitos.
                  </p>
                  <Link to="/depositos">
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739901249/torneria_xats0b.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  <h5 className="card-title text-center">Torneria</h5>
                  <p className="card-text">
                    Control de stock de repuestos fabricados.
                  </p>
                    <Link to="/torneria">
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 justify-content-center">
              <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739901249/pendientes_mbweet.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  <h5 className="card-title text-center">Pendientes</h5>
                  <p className="card-text">
                    Control de pendientes.
                  </p>
                    <Link to="/pendientes">
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739901249/estadisticas_ujzksn.png', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  <h5 className="card-title text-center">Estadisticas</h5>
                  <p className="card-text">
                    Muestra de progreso de campaña por temporada.
                  </p>
                    <Link to="/torneria">
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
