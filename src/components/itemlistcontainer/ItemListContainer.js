import ItemCounter from "../ItemCount/item";
import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const camisetas = [
    {id: 1, image: "https://i.ibb.co/RbPyv45/buccaneers.jpg" , title: "Buccaneers", category: 'camiseta'},
    {id: 2, image: "https://i.ibb.co/p2Zw6bn/lacy.jpg",  category: 'camiseta', title: "Lacy"},
    {id: 3, image: "https://i.ibb.co/S3N6mXy/panthers.jpg",  category: 'camiseta',  title: "Panthers"},
    {
        id: 51, image: "https://i.ibb.co/T2MwLx2/shortafa.jpg", title: "AFA BASQUET",  category: 'short'
    },
    {
        id: 52, image: "https://i.ibb.co/yqBnHwr/shortchicago.jpg", title: "CHICAGO BULLS", category: 'short'
    },
    {
        id: 53, image: "https://i.ibb.co/HNB7ZPc/shortlakers.jpg",  title: "L.A LAKERS", category: 'short'
    },
];



export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(camisetas);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(camiseta => camiseta.category == categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
     }, [categoriaId])

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