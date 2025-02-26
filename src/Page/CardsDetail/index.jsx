import { useParams, Navigate } from 'react-router-dom';

const Cards = [
    {id: 'tracto', title: 'Tracto elevador', description: 'Detalles del tracto elevador Manitou'},
    {id: 'autoelevador-mitsubishi', title: 'Autoelevador Mitsubishi', description: 'Detalles del autoelevador Mitsubishi'},
    {id: 'autoelevador-doosan', title: 'Autoelevador Doosan', description: 'Detalles del autoelevador Doosan'},
    {id: 'autoelevador-manitou', title: 'Autoelevador Manitou', description: 'Detalles del autoelevador Manitou'},
    {id: 'tractores', title: 'Tractores', description: 'Detalles de los tractores Jhon Deere y Massey Ferguson'},
    {id: 'volcadoras', title: 'Volcadoras', description: 'Detalles de las volcadoras'},
]

const CardsDetail = () => {
    const { id } = useParams();
    const card = Cards.find(card => card.id === id);

    if (!card) {
        return <Navigate to="/notfound" />
    }
    return (
        <div>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
        </div>
    );
}

export default CardsDetail;