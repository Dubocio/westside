import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(camiseta => <Item key={camiseta.id} info={camiseta} />)
    );
}

export default ItemList;