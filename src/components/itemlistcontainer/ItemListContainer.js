import ItemCounter from "../ItemCount/item";






export const ItemListContainer = () => {

    const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades`);
    }
    return (
        <>    
        <ItemCounter initial={1} stock={5} onAdd={onAdd} />
        </>
        
)};

export default ItemListContainer;