import React from "react";
import './item.css';


const Item= ({ info }) => {
    return (
        <a href="" className="camiseta">
            <img src={info.image} alt="" height="300" />
            <h3>{info.title}</h3>
        </a>
    );
}

export default Item;