import SearchSpare from "../../components/Layout/search";

const Tracto = () => {
   const handleSearch = (query) => {
      console.log("Buscando...", query);
    }

    return (
        <div>
          <SearchSpare onSearch={handleSearch} />
        </div>
    );
}

export default Tracto;































/*import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const products = Array.from({ length: 70 }, (_, i) => ({
  id: i + 1,
  title: `Producto ${i + 1}`,
  stock: Math.floor(Math.random() * 100),
  image: "https://via.placeholder.com/150",
  description: "Descripción del producto."
}));

const Tracto = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const itemsPerPage = 10;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {displayedProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Stock: {product.stock}</p>
                <Button variant="primary" onClick={() => setSelectedProduct(product)}>
                  Ver detalles
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Anterior
        </Button>
        <span className="mx-3">Página {currentPage} de {totalPages}</span>
        <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Siguiente
        </Button>
      </div>

      {selectedProduct && (
        <Modal show={true} onHide={() => setSelectedProduct(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProduct.image} className="img-fluid mb-2" alt="Producto" />
            <p>{selectedProduct.description}</p>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" defaultValue={selectedProduct.stock} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedProduct(null)}>
              Cerrar
            </Button>
            <Button variant="success">Guardar</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Tracto;*/


/*import { useState } from 'react';
import './index.css'
import Layout from '../../Components/Layout';

const groups = [
        {
          title: "Manitou - Tractoelevadores",
          items: [
            { id: 1, title: "Eje del tren trasero", text: "Descripción del producto.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372653/EJE_DE_TREN_TRASERO_MANITOU_t6xckb.jpg" },
            { id: 2, title: "Buje del tren trasero M26-2", text: "Cuna/Balancín 3 mm .", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372650/BUJE_DE_TREN_TRASERO_CUNA-BALANCIN_3_MM_MANITOU_ojfjsv.jpg" },
            { id: 3, title: "Buje de tren trasero MC30", text: "Bancada 4 mm.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372650/BUJE_DE_TREN_TRASERO_BANCADA_4_MM_MANITOU_oubgoj.jpg" },
            { id: 4, title: "Buje de tren trasero M26-2", text: "Punta de eje de Ø45 5 mm.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372650/BUJE_DE_TREN_TRASERO_MANITOU_A_45_MM_lplpmd.jpg" },
            { id: 5, title: "Buje de tren trasero", text: "Punta de eje de Ø44 6 mm.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372650/BUJE_DE_TREN_TRASERO_MANITOU_MODIFICADO_A_44_MM_bfrlqg.jpg" },
            { id: 6, title: "Rolo de torre", text: "", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372672/ROLO_DE_TORRE_MANITOU_hhwd8g.jpg" },
            { id: 7, title: "Porta crapodina", text: "", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372668/PORTA_CRAPODINA_MANITOU_jbw83d.jpg" },
            { id: 8, title: "Rolo de cadena", text: "Chica.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372672/ROLO_DE_CADENA_CHICA_MANITOU_-_AUTO_v6ii6y.jpg" },
            { id: 9, title: "Rolo de cadena", text: "Grande.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372672/ROLO_DE_CADENA_GRANDE_MANITOU_uqnmmi.jpg" },
            { id: 10, title: "Punta de eje", text: "Izquierda.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372672/PUNTA_DE_EJE_IZQUIERDA_MANITOU_i0ofit.jpg" },
            { id: 11, title: "Punta de eje", text: "Derecha.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372671/PUNTA_DE_EJE_DERECHA_MANITOU_pirdrd.jpg" },
            { id: 12, title: "Tensor de cadena", text: "Sin cilindro central.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372676/TENSOR_DE_CADENA_SIN_CILINDRO_CENTRAL_CON_RANURA_byucw0.jpg" },
            { id: 13, title: "Tensor de cadena", text: "Con cilindro central.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372675/TENSOR_DE_CADENA_CON_CILINDRO_CENTRAL_SIN_RANURA_MANITOU_vssi1q.jpg" },
            { id: 14, title: "Tapa", text: "Para cilindro de inclinación.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372675/TAPA_DE_CILINDRO_DE_INCLINACION_MANITOU_ivunhb.jpg" },
            { id: 15, title: "Arandela de compensación", text: "Medida de Ø40", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372645/ARANDELA_DE_COMPENSACI%C3%93N_3_MM_MANITOU_zv7cju.jpg" },
            { id: 16, title: "Perno MC30", text: "Para tren trasero.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372665/PERNO_PARA_MC30_BIELETA_MANITOU_imlaor.jpg" },
            { id: 17, title: "Patin antidesgaste", text: "Para tramo de torres.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372657/PATIN_ANTI_DESGASTE_DE_GRILLON_MANITOU_wp5yij.jpg" },
            { id: 18, title: "Vasos", text: "Para acoples.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734720925/VASOS_DE_GRILLON_PARA_ACOPLES_DE_MANITOU_dasf0c.jpg" },
            { id: 19, title: "Pernos", text: "Para uñas.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372665/PERNO_PARA_U%C3%91AS_MANITOU_c4naz3.jpg" },
            { id: 20, title: "Traba", text: "Para uñas.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372676/TRABA_DE_U%C3%91AS_DE_MANITOU_ztpckg.jpg" },
            { id: 21, title: "Seguro", text: "Para traba de uñas.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734721534/SEGURO_DE_TRABA_DE_U%C3%91AS_MANITOU_om1nja.jpg" },
            { id: 22, title: "Vástago", text: "Para cilindro de dirección.", img: "https://res.cloudinary.com/dsolw4c9p/image/upload/v1734372679/VASTAGO_DE_CILINDRO_DE_DIRECCI%C3%93N_MANITOU_plewmj.jpg" },
            { id: 23, title: "Soporte", text: "Para palanca de comando.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 24, title: "Perno", text: "Para soporte de palanca de comando.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 25, title: "Base de palanca de comando", text: "", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 26, title: "Esparragos", text: "Para modulos de comando.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 27, title: "Placa", text: "Para de sujeción de diferencial.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 28, title: "Soporte", text: "Para pata de motor izquierda.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 29, title: "Soporte", text: "Para pata de motor derecho.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 30, title: "Abrazadera", text: "Para cilindro de torre.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 31, title: "Prensa", text: "Para caño manguera doble.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 32, title: "Prensa", text: "Para caño manguera simple.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 33, title: "Abrazadera doble", text: "Para caño de mangueras.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 34, title: "Enganche", text: "Para uñas.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 35, title: "Rueda de respaldo", text: "Para butaca.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 36, title: "Bulón de corredera", text: "Para butaca.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 37, title: "Eje", text: "Para tren trasero MC30.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 38, title: "Tapa", text: "Para cilindro de elevación lateral.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 39, title: "Perno de MC30", text: "Modelo viejo punta de eje.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 40, title: "Perno", text: "Para bancada de torre.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 41, title: "Perno", text: "Para cadena de torre.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 42, title: "Arandela", text: "Para soporte de rotula de cilindro de dirección.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 43, title: "Arandela inferior", text: "Para rotula de cilindro de dirección.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 44, title: "Retenes", text: "Para vástagos de cilindro de dirección.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 45, title: "Arandela", text: "Para buje de cuna-balancín.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 46, title: "Bulon de maza", text: "Para rueda trasera, medida: 18.75 mm.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 47, title: "Bulón de maza", text: "Para rueda trasera, medida: 19 mm.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 48, title: "Tuerca de maza", text: "Para rueda trasera.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 49, title: "Tuerca de vástago", text: "Para punta de eje.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 50, title: "Perno de ojo", text: "Para vástago de cilindro de dirección.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 51, title: "Perno de punta de eje", text: "Modelo viejo MC30.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 52, title: "Perno", text: "Para cilindro de inclinación.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 53, title: "Seguro de balancín", text: "Bulon - prisionero.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 54, title: "Soporte de cadena fina", text: "Carro.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 55, title: "Perno de engranaje intermedio de la distribución", text: "Descripción del producto.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 56, title: "Anclaje", text: "Para cadena gruesa.", img: "https://source.unsplash.com/random/300x200?business" },
            { id: 57, title: "Perno de rolo", text: "Para Torre.", img: "https://source.unsplash.com/random/300x200?city" },
            { id: 58, title: "Grampa de manguera", text: "Para catre.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 59, title: "Grampa de manguera", text: "Para catre.", img: "https://source.unsplash.com/random/300x200?tech" },
            { id: 60, title: "Arandela", text: "Para bomba hidráulica.", img: "https://source.unsplash.com/random/300x200?nature" },
            { id: 61, title: "Perno", text: "Para bomba de freno.", img: "https://source.unsplash.com/random/300x200?business" },
          ]
        },
        
    ]

  const Torneria = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    
    const openModal = (item) => {
      setSelectedItem(item);
    };
    
    const closeModal = () => {
      setSelectedItem(null);
    };
    return (
      <Layout>
        <div className="container">
          {groups.map((group, index) => (
            <div key={index} className="group">
              <h2>{group.title}</h2>
              <div className="grid-container">
                {group.items.map((item) => (
                  <div key={item.id} className="card">
                    <img src={item.img} alt={item.title} />
                    <div className="card-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <button onClick={() => openModal(item)} className="card-button">Ver Más</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          
    
          {selectedItem && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>&times;</button>
                <img src={selectedItem.img} alt={selectedItem.title} />
                <h3>{selectedItem.title}</h3>
                <p>{selectedItem.text}</p>
              </div>
            </div>
          )}
        </div>
        </Layout>
        );
      };*/
