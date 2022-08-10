import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import '../itemlistcontainer/style.css'



export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter).then( res=> setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection).then( res=> setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }
     }, [categoriaId])


    return (
        <>    
        <h1>Productos Disponibles:</h1>
        <div className="horizon"><ItemList data={data}/></div>
        </>
        
)};

export default ItemListContainer;