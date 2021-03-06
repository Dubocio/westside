import ItemCounter from "../ItemCount/item";
import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import buccaneers from "../assets/img/buccaneers.jpg";
import lacy from "../assets/img/lacy.jpg";
import panthers from "../assets/img/panthers.jpg";

const camisetas = [
    {id: 1, image: "https://i.ibb.co/RbPyv45/buccaneers.jpg" , title: "Buccaneers"},
    {id: 2, image: "https://i.ibb.co/p2Zw6bn/lacy.jpg", title: "Lacy"},
    {id: 3, image: "https://i.ibb.co/S3N6mXy/panthers.jpg", title: "Panthers"},
];



export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(camisetas);
            }, 2000);
        });
        getData.then(res => setData(res));
    }, [])
    const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades`);
    }
    return (
        <>    
        <ItemCounter initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data}/>
        </>
        
)};

export default ItemListContainer;