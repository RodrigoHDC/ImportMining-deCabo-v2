import ItemList from "./ItemList";
import data from "../Data/api.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { name } = useParams();
    const [items, setItems] = useState([]);
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
  
    useEffect(() => {
      promise.then((res) => {
        const products = res;
        if (name) {
          setItems(products.filter((product) => product.category == name));
        } else {
          setItems(products);
        }
      });
    }, [name]);
    return (
      <>
        <div className="mt-5">
          <ItemList items={items} />
        </div>
      </>
    );
  };
  
  export default ItemListContainer;