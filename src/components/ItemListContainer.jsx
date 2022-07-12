import ItemCount from "./ItemCount";

const onAddItem = (count) => {
 if (count === 1){
  alert(`${count} Producto ha sido agregado a tu carrito!`)}
  else (
    alert(`${count} Productos han sido agregados a tu carrito!`))  
  };

const ItemListContainer = (props) => {
    return ( 
        <>
        <p>{props.greeting}</p>
        <ItemCount stock={5} initial={1} onAdd={onAddItem}></ItemCount>
        </>
     )
}
 
export default ItemListContainer;