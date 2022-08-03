
import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const camisetas = [
    {
        id: 1, image: "https://i.ibb.co/RbPyv45/buccaneers.jpg" , title: "Buccaneers", category: 'camisetas', price: 10000
    },
    {
        id: 2, image: "https://i.ibb.co/p2Zw6bn/lacy.jpg",  category: 'camisetas', title: "Lacy", price: 10000
    },
    {
        id: 3, image: "https://i.ibb.co/S3N6mXy/panthers.jpg",  category: 'camisetas',  title: "Panthers", price: 10000
    },
    {
        id: 4, image: "https://i.ibb.co/T2MwLx2/shortafa.jpg", title: "AFA BASQUET",  category: 'shorts', price: 9500
    },
    {
        id: 5, image: "https://i.ibb.co/yqBnHwr/shortchicago.jpg", title: "CHICAGO BULLS", category: 'shorts', price: 9500
    },
    {
        id: 6, image: "https://i.ibb.co/HNB7ZPc/shortlakers.jpg",  title: "L.A LAKERS", category: 'shorts', price: 9500
    },
];



export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(camisetas);
            }, 300);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(camisetas => camisetas.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
     }, [categoriaId])


    return (
        <>    
        
        <ItemList data={data}/>
        </>
        
)};

export default ItemListContainer;