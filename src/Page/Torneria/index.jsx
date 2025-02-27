import { Link } from "react-router-dom";
import './index.css';
import Layout from '../../components/Layout';
import { Button } from 'react-bootstrap';

const Torneria = () => {
    return (
        <Layout>
        <div className="home-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4 d-flex justify-content-center">
                <div className="card shadow-lg hover-effect rounded h-100" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739997767/manitou_jkpnj8.png', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                    <h5 className="card-title text-center">Tracto elevador</h5>
                    <p className="card-text">
                      Fabricación de repuestos para tracto elevador Manitou.
                    </p>
                  <Link to="/torneria/tracto">
                    <Button variant="success">Ver mas...</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 d-flex justify-content-center">
                <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739997767/mitsubishi_oqibfv.png', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                    <h5 className="card-title text-center">Autoelevador</h5>
                    <p className="card-text">
                    Fabricación de repuestos para autoelevador Mitsubishi.
                    </p>
                    <Link to="/torneria/autoelevador-mitsubishi">
                    <Button variant="success">Ver mas...</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 d-flex justify-content-center">
                <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739997767/Doosan-pnuematic-forklift-pro5-series_yqydgw.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                    <h5 className="card-title text-center">Autoelevador</h5>
                    <p className="card-text">
                    Fabricación de repuestos para autoelevador Doosan.
                    </p>
                      <Link to="/torneria/autoelevador-doosan">
                    <Button variant="success">Ver mas...</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 d-flex justify-content-center">
                <div className="card shadow-lg hover-effect rounded h-100" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739998330/R_xgeqjm.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                    <h5 className="card-title text-center">Autoelevador</h5>
                    <p className="card-text">
                    Fabricación de repuestos para autoelevador Manitou.
                    </p>
                      <Link to="/torneria/autoelevador-manitou">
                    <Button variant="success">Ver mas...</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 d-flex justify-content-center">
                <div className="card shadow-lg hover-effect rounded h-100" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1739998330/OIP_kdf98k.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                    <h5 className="card-title text-center">Tractores</h5>
                    <p className="card-text">
                    Fabricación de repuestos para tractores Jhon Deere y Massey Ferguson.
                    </p>
                      <Link to="/torneria/tractores">
                    <Button variant="success">Ver mas...</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 d-flex justify-content-center">
                <div className="card shadow-lg hover-effect rounded h-100" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1740166490/d976c4e4-d50e-4d1e-a617-52d87c46d37a_qbqr9b.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                    <h5 className="card-title text-center">Volcadoras</h5>
                    <p className="card-text">
                    Fabricación de repuestos para Volcadoras.
                    </p>
                      <Link to="/torneria/volcadoras">
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

export default Torneria;