const Item = (props) => (
        <div>
            <h1>{props.id}</h1>
            <h1>{props.category}</h1>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <h1>{props.price}</h1>
            <h1>{props.stock}</h1>
            <img>{props.img}</img>
        </div>
    )

 
export default Item;