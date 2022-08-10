
import './item.css';
import { Link } from 'react-router-dom';


const Item= ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className="camiseta">
            <img src={info.image} alt="" height="300" />
            <h3>{info.title}</h3>
            <h3>${info.price} x Un.</h3>
        </Link>
    );
}

export default Item;