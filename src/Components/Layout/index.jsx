import PropTypes from 'prop-types';
import  Navbar  from '../Navbar'

const Layout = ({ children }) => {
  return (
      <>
          <Navbar />
          <div className="container-fluid p-4" style={{ marginTop: '100px' }}>
              <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                      {children}
                  </div>
              </div>
          </div>
      </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout