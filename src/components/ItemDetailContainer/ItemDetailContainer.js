import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetal";

const camiseta = {id: 1, image: "https://i.ibb.co/RbPyv45/buccaneers.jpg" , title: "Buccaneers"}


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(camiseta);
            }, 1800);
        });
        getData.then(res => setData(res))
    }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;