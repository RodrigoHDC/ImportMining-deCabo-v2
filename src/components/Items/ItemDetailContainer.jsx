import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
// Importamos Firebase:
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect( () => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'Items', id);
      getDoc(queryDoc)
        .then(res => setItem({id: res.id, ...res.data() }))
  }, []);

  return (
    <ItemDetail item={item} />
  )
};

export default ItemDetailContainer;
