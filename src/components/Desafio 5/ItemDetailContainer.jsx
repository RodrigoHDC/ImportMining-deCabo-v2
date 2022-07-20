import ItemDetail from "./ItemDetail";
import dataDetail from "../Data/apidetails.json";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const params = useParams();

  const promise = new Promise((res, rej) => {
    setTimeout(() => res(dataDetail), 2000);
  });

  useEffect( () => {
    promise.then((response) => {
      const foundItem = response.filter((item )=> item.id == params.id);
      setItem(foundItem[0]);
    })
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
