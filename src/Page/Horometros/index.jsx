import Layout from "../../components/Layout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Horometro = () => {
  return (
    <Layout>
      <div className="home-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1740676327/S-OP_ispel5.png', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: 'full', height: '180px' }}>
                <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  <h5 className="card-title text-center">Horometros central</h5>
                  <p className="card-text">
                    Control de maquinarias en alquiler.
                  </p>
                <Link to='/controlalquiler'>
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1740676328/C-OP_pqjinb.jpg', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  <h5 className="card-title text-center">Horometro de fincas</h5>
                  <p className="card-text">
                    Control de maquinarias en servicios de fincas.
                  </p>
                  <Link to='/controlfincas'>
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card shadow-lg hover-effect rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsolw4c9p/image/upload/v1740676327/TERCEROS_t71xod.png', backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '350px', height: '180px' }}>
                <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  <h5 className="card-title text-center">Horometros terceros</h5>
                  <p className="card-text">
                    Control de naquinarias de terceros.
                  </p>
                    <Link to='/controlterceros'>
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
}
    


export default Horometro;

