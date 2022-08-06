import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetal";
import { useParams } from 'react-router-dom';
import '../ItemDetailContainer/ItemDetailContainer.css';


const camisetas = [
    {
        id: 1, image: "https://i.ibb.co/RbPyv45/buccaneers.jpg" , title: "Buccaneers", category: 'camisetas', price: 10000,
    },
    {
        id: 2, image: "https://i.ibb.co/p2Zw6bn/lacy.jpg",  category: 'camisetas', title: "Lacy", price: 10000, 
    },
    {
        id: 3, image: "https://i.ibb.co/S3N6mXy/panthers.jpg",  category: 'camisetas',  title: "Panthers", price: 10000, 
    },
    {
        id: 4, image: "https://i.ibb.co/T2MwLx2/shortafa.jpg", title: "AFA BASQUET",  category: 'shorts', price: 9500,
    },
    {
        id: 5, image: "https://i.ibb.co/yqBnHwr/shortchicago.jpg", title: "CHICAGO BULLS", category: 'shorts', price: 9500, 
    },
    {
        id: 6, image: "https://i.ibb.co/HNB7ZPc/shortlakers.jpg",  title: "L.A LAKERS", category: 'shorts', price: 9500,
    },
];




export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { detalleId } = useParams();

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(camisetas);
            }, 400);
        });
        getData.then(res => setData(res.find(camisetas => camisetas.id === parseInt(detalleId))));
    },[detalleId])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;