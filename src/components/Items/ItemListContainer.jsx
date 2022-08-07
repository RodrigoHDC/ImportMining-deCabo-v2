import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Importamos Firebase:
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { name } = useParams();
  
    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'Items');
          if (name) {
            const queryFilter = query(queryCollection, where('category', '==', name))
            getDocs(queryFilter)
             .then(res => setItems (res.docs.map(item => ({id: item.id, ...item.data() }))))      
        } else {
          getDocs(queryCollection)
          .then(res => setItems (res.docs.map(item => ({id: item.id, ...item.data() }))))    
        }
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